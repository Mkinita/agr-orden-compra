import QRCode from 'qrcode.react';

function QRGeneratorSaldo({saldo}) {
    
  return (
    <div className='flex justify-center items-center h-full'>
      <QRCode value={saldo} />
    </div>
  );
}

export default QRGeneratorSaldo;
