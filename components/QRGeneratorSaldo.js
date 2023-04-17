import QRCode from 'qrcode.react';

function QRGenerator({saldo}) {
    
  return (
    <div className='flex justify-center items-center h-full'>
      <QRCode value={saldo} />
    </div>
  );
}

export default QRGenerator;
