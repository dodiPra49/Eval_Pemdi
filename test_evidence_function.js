import { handler } from './netlify/functions/evidence.js';

async function runTests() {
  console.log('=== 1. Test GET Evidence List ===');
  const getRes = await handler({
    httpMethod: 'GET',
    queryStringParameters: { indicator_id: 'ind-01' }
  });
  console.log('GET Response:', getRes.statusCode, JSON.parse(getRes.body));

  console.log('\n=== 2. Test Non-PDF Rejection ===');
  const nonPdfRes = await handler({
    httpMethod: 'POST',
    body: JSON.stringify({
      indicator_id: 'ind-01',
      judul_dokumen: 'Test Bukan PDF',
      file_name: 'laporan.docx',
      file_base64: Buffer.from('Bukan file PDF').toString('base64')
    })
  });
  console.log('Non-PDF Response:', nonPdfRes.statusCode, JSON.parse(nonPdfRes.body));

  console.log('\n=== 3. Test Valid PDF Upload ===');
  const validPdfContent = '%PDF-1.4\n1 0 obj\n<< /Title (Dokumen Uji Bukti Dukung SPBE) >>\nendobj\ntrailer\n<< /Root 1 0 R >>\n%%EOF';
  const postRes = await handler({
    httpMethod: 'POST',
    body: JSON.stringify({
      indicator_id: 'ind-01',
      checklist_id: 'c1-1',
      target_level: 3,
      judul_dokumen: 'Perbup No 24 Th 2025 ttg Arsitektur SPBE',
      nomor_surat_resmi: 'HK.01/24/2025',
      tahun_terbit: 2025,
      deskripsi_singkat: 'Peraturan Kepala Daerah tentang Arsitektur dan Peta Rencana Pemerintah Digital',
      file_name: 'Perbup_Arsitektur_2025.pdf',
      file_base64: Buffer.from(validPdfContent).toString('base64')
    })
  });
  console.log('Upload PDF Response:', postRes.statusCode, JSON.parse(postRes.body));
  const createdData = JSON.parse(postRes.body).data;

  console.log('\n=== 4. Test GET Evidence List After Upload ===');
  const getAfter = await handler({
    httpMethod: 'GET',
    queryStringParameters: { indicator_id: 'ind-01' }
  });
  console.log('GET After Upload:', getAfter.statusCode, JSON.parse(getAfter.body));

  console.log('\n=== 5. Test DELETE Evidence ===');
  if (createdData?.id) {
    const delRes = await handler({
      httpMethod: 'DELETE',
      queryStringParameters: { id: createdData.id }
    });
    console.log('DELETE Response:', delRes.statusCode, JSON.parse(delRes.body));
  }
}

runTests().then(() => {
  console.log('\nSeluruh pengujian Netlify Function evidence.js SELESAI!');
  process.exit(0);
}).catch(err => {
  console.error('Test Error:', err);
  process.exit(1);
});
