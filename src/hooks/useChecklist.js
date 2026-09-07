import { useState, useEffect } from 'react';
import { INDICATORS } from '../data/indicatorsData';

const STORAGE_KEY = 'eval_pemdi_checklist_v1';

export function useChecklist() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Gagal memuat data checklist dari localStorage", e);
    }
    
    // Default initial state
    const initial = {};
    INDICATORS.forEach(ind => {
      initial[ind.id] = {
        checkedItems: {}, // { 'c1-1': true }
        selfLevel: 1,     // Default 1
        notes: '',
        evidenceLink: '',
        lastUpdated: new Date().toISOString()
      };
    });
    return initial;
  });

  // Simpan otomatis ke localStorage saat data berubah
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("Gagal menyimpan data checklist", e);
    }
  }, [data]);

  const toggleCheckItem = (indicatorId, itemId) => {
    setData(prev => {
      const current = prev[indicatorId] || { checkedItems: {}, selfLevel: 1, notes: '', evidenceLink: '' };
      const updatedChecked = {
        ...current.checkedItems,
        [itemId]: !current.checkedItems[itemId]
      };

      return {
        ...prev,
        [indicatorId]: {
          ...current,
          checkedItems: updatedChecked,
          lastUpdated: new Date().toISOString()
        }
      };
    });
  };

  const updateIndicatorState = (indicatorId, fields) => {
    setData(prev => {
      const current = prev[indicatorId] || { checkedItems: {}, selfLevel: 1, notes: '', evidenceLink: '' };
      return {
        ...prev,
        [indicatorId]: {
          ...current,
          ...fields,
          lastUpdated: new Date().toISOString()
        }
      };
    });
  };

  const resetAllData = () => {
    const fresh = {};
    INDICATORS.forEach(ind => {
      fresh[ind.id] = {
        checkedItems: {},
        selfLevel: 1,
        notes: '',
        evidenceLink: '',
        lastUpdated: new Date().toISOString()
      };
    });
    setData(fresh);
  };

  // Kalkulasi statistik keseluruhan
  let totalChecklistItems = 0;
  let totalCheckedItems = 0;
  let totalSelfScore = 0;

  INDICATORS.forEach(ind => {
    const checklist = ind.evidenceChecklist || [];
    totalChecklistItems += checklist.length;
    
    const indState = data[ind.id];
    if (indState) {
      totalSelfScore += (indState.selfLevel || 1);
      checklist.forEach(item => {
        if (indState.checkedItems && indState.checkedItems[item.id]) {
          totalCheckedItems++;
        }
      });
    } else {
      totalSelfScore += 1;
    }
  });

  const completionPercentage = totalChecklistItems > 0 
    ? Math.round((totalCheckedItems / totalChecklistItems) * 100) 
    : 0;

  const averageMaturityIndex = INDICATORS.length > 0 
    ? (totalSelfScore / INDICATORS.length).toFixed(2) 
    : "1.00";

  return {
    data,
    toggleCheckItem,
    updateIndicatorState,
    resetAllData,
    stats: {
      totalChecklistItems,
      totalCheckedItems,
      completionPercentage,
      averageMaturityIndex,
      totalIndicators: INDICATORS.length
    }
  };
}
