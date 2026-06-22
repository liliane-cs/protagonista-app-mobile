import QRCode from "react-native-qrcode-svg";
import { PropsQrCode } from "./type";

export function QRCodeCard({ caminho }: PropsQrCode) {
  return <QRCode value={`https://protagoniza.com/${caminho}`} size={100} />;
}
