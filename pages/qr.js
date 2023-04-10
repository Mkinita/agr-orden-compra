import QRGenerator from '../components/QRGenerator';

function qr() {
  const myNumber = '123456789';

  return (
    <div>
      <h1>My QR Code</h1>
      <QRGenerator number={myNumber} />
    </div>
  );
}

export default qr;
