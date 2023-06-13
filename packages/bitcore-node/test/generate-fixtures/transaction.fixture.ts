import { InternalStateProvider } from '../../src/providers/chain-state/internal/internal';
const ducatuscore = require('@ducatus/ducatuscore-lib');
const transaction =
  '020000001b683b0519d1162a895f66088bb03a04f3f6e1c398e68758a347b538e71d70b919000000006a47304402202984c8b31590e6302ce21cd2ec662b1536cff23d867109ad2c0cf16797debdea02201a5070240baddfb52edd6ced42a72dac86f9fbd895eeec4fc742e39170a3046b01210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff6aa1f693c9cf30f257442b1ddbdb506c767b705e8eb92bcd7f9765a233ecd2cc000000006a47304402206701a855dddebe143c4a9d57bda940078f0881c0c54fbf8a18afe00e44dd3d1e02200b8e456bb28dd7ad6997a4d64910f19ab1a6161ad97fe03e0ca7a1b48914544001210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff490c08a5665919d7712c34e9119d5cec3b5484dd170d1f20421bbda2fdbb0b08000000006a47304402203883e058ddd1ddbc9cb69df3e38d13c1baa3b1110cad608406eab713e6ee01570220667ae1e73d58b41ce7ce7079b959deeab6e853550fccf55bc7fdb0a9a1879c120121035b885312cf73daecd05ba78e9f386df9085787073fcab29a0c4ed12f633ef560feffffff592efcd57a9079019b3c724fd0d6219720d7ffd881c4c5dbd6a577c164df4fe9000000006a473044022074437a39e16774d9cca5e421daacf051359adcb102e58e1b3e528f72aa29fe9302201d4fd7374e2a2cd4f8efc8b82832d9bd8256d1c33f8bf3e520496fa5d4ad51dc0121031d74494ccfa9d8b4f04e6fb0875a1ccf2b2f13240c42abe160ba9084be549b3cfeffffff32b8ddf03d86f05ad9fcdd4c6f484e8309791a7e749b5d61c58594b1db0c4926000000006a473044022030c1a9a64aa019b80420a601dc901ccf4d70c3d995f805ee4f73ac67abb65ba1022059986749a4690847f85b7b4841d31fc0d7166606532de077fc1ec859ae2dd0d601210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff661197453bdc223d2100aefa1641153f1c42797a93a2fe2e58ac56a6f53ca70a000000006a47304402201bc86d49a89e83e9459b85081a9511ab7a498f8384b6d8977e08081b1d78ab60022027a0fae2b51302864c6ed5e7d5666ec3d9aa2923411783de38026efd6b29f1ad01210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff037ed4528a141d706a305c7ce2b32efc3c9f554af076168f83a3506ade0a2922000000006a473044022004a58a6cf8c8f5d9205fdd36ca875ca5fdbe90dde1b4ae7213d760099e46ba4d022046b394f91b1bfdc932a9c06d4cbfad4d5ee2b15dd82c6d5ef1f66211066fa93901210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffffc463c52801a4828dac8affbc8e662148290fc5eb200d18f1e74ef47bd5820313000000006a47304402203f0405e43c2349b1e4f4f4347188bc796878780d3e60ae0b68bb723ff9865560022060a1338d629c7e94d548621bcf7898834c2dc1b0ac4a3608f270a30ccb322a5401210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff3a299ff17778ba16a2235387cf58f4e48b7e086ccf769c85785c8b61dd4c3138000000006a473044022020d7faefc3f73636fe2f446c40ac9231a0de01ac45cc2d657e1ede7306a21d98022068e8671d94b6bc13dc581b2cb65cc852b62a0c7c95eb16dd53e5a102832942b9012103d99698bf731a8e6c14c6e1ffb509d842d14c751a0b745617d73a5d7ec31aa6b9feffffffb44039eb058bf32cf0298706a41254dc524f244e6559bffb30015b50fea015c4000000006a47304402201055147c74c5c0d20865d154327261dddc9f6b32f2223bb6fae8de9ff273bdc602206657f0ac4e857aafd22860774a86cd8e2d941ebeb721470db5f98ba5463d0f2d012102fe2b69ea11f7117feda3c3d92634c007f64912ac34d356ba1d719a66be345321feffffff9f3360e408ccd8c21d7bd1ee3dc88e7af87b000e6042aae9c83ad891e2e73156000000006a47304402205790f49af0c6f947b65696af554554e63e9a166c38eeb620fcf3bd02fe3970e30220454cfe964c06a624b4041fc98b17444c1fad16d17a8468896fcbb78d7d25f9e001210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff1514354baf0da374083bb9185c2165e44548d1124e4693ec807a94b21f1065e1000000006a4730440220695fb02ba525af2ed8d8fc3a54fe1b2f2c4ba57b226a1ef3ef74e35abd011c9d022040bfd38f94333148623b985f5ac57b4ecc6bbc291f572978824aa75b4e93f1c101210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff23c72c3de6c3ad98ffbce922de1b47cc15c4678c1905f8d21ccb5dce812d1823000000006a4730440220650a0abb7c002d65e2e35e893e290df6b26a2dbd03ed163098c03e22c0109c1c02204ff0b0c47e0464fefc8928f64243332e94dcbaefc9e8853a4495dcf00ecbda3001210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff67a50e0f8930c574865c622835625733058cb5dc40e95ce31e6893d78e905523000000006a47304402204a311cb4a825a964da7b9c8bdb7714c9d9f8088c779310a5686faab95b0541d202207679af16a4881614704f5ff553e5db72890e6f45c3b6fb81d1c3c2bbe09436600121035b885312cf73daecd05ba78e9f386df9085787073fcab29a0c4ed12f633ef560feffffff32e3018d21bc993fef960074ae8cad776fb086859444f4385c81c8262832d78d000000006a47304402200220f5badbf184e57dfffdd5e87da8db643fa3200ee83c3351c755112923279a02204ed718352c95def1849d863b7e4270526800f560c80118c171dd8e470bef5f940121035b885312cf73daecd05ba78e9f386df9085787073fcab29a0c4ed12f633ef560fefffffff5b46986814b8f873a1b2d5bd732293ad799567134f7be6927e81fa82d06fb77000000006a473044022014d3fe3e72d44c78e610013b690b0ee1906563ddca7ef1b313c73681e607b956022034a0bdc57576a99a2a151389490ee06f684be6f516a875f940b5c67b7d4c52f50121035b885312cf73daecd05ba78e9f386df9085787073fcab29a0c4ed12f633ef560feffffff9b78c526f41e1469a136f424608fc897a8265b72274a3a2041f303741b9c3d6a000000006a47304402207c2dbe03f2325ffae248cf25e9583e0efdd08bb6e483e469038d866910649c0402203bfe54818cb12107e482b9f965360184ef157d84a18fe2d42d8d68c86d0fc5af0121035b885312cf73daecd05ba78e9f386df9085787073fcab29a0c4ed12f633ef560feffffff235453d6157ea24d44a2cee6bb0b5bf2d60e9ba22bfc3f0dc3719ef212e3137d000000006a473044022072542a5e6bfdc6da35c2ee5bfc75642dc40fa95602e5c4e354b8cc3b528ce3e502201f9cef59a3a5386cd8beabc6df19bd5a2c61ec10fde6ff66f757022975d5248a0121035b885312cf73daecd05ba78e9f386df9085787073fcab29a0c4ed12f633ef560feffffff9ee30e7d74f549f9c705f61ff10f8d727fd1dbda43bb43ab691ecdc040d18acb000000006a4730440220401b99b6e3558f4e58348b7dc25e89e33fd74fffaaeb54aad54f0b13e2ad0e16022006c88f3b59c8761f6563f56d37788d04d2467831948755d45f6dbcdb04c54b6701210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff40f8ca315c21b6943593d9faadac8f7f3cd2de1436229c59bc94201e0fdea89a000000006a47304402204cd3d26494f7689bca50115c90804ee4be217705c68f6ba2d4b5e49edb8a8b2f02207aee7e29efc4842374060fc0236a3b9028eb92cba3cab8e5127daae5aa09760b012102346af4f8d64fc512d690ef3426f8c36d5066c0869b7c221a134115a319bd94adfeffffff870c0f27ef2a7a0416a994dd4517013623e9918bdb394001ca4dcd8600d802d4000000006a47304402204d0f2c961c7d625119fcc483957d403ed1dd90788b6f2fd125a7d6c34b9bba3e02201e4560e22d6bb0f1376ebfa4295173d130cc645ea007fbd6d5fb0b7b9bddf60f0121025f4adcad0f46dd1aac18c64cc614e1287928e6e7d08ce2e997a58f3893433c5efeffffff34cb78a46f38c560b52bbc28a619fa417b47b1f0bce8f40600a9deea2b2ba4ca000000006a47304402206ba721c29ff03288df1c39575b19198b98063c28a47750726c7f06aa1d9f9d5b02201c8ce050579006eb05edf3b2ef356e241e134f752c5d0a5ed341b9719175115401210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff6aefce8ce6c8cf2f67cf09f601568345cc8057ad776713697baca8ebb75230ef000000006a4730440220769d5f83cae2a36da30e8503ee0063b295f568ff4aec238097e119a34855824802200c1d02c983804be0a64f732761ad98386e0641fa8170a3f43375981a60752e5101210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75fefffffffb6e0dd390f9a37ed6c15ac45f8cb823261a1d6772fb581c9dedef4dda8335bf000000006a47304402202a3621ded65444d5d613fdf32e070b14f4eb31032ba058b41f640f121b4cd30802203ab5cbfc63fcf3ac2e4e8668eddfe06b07b001341e6471c879b93cf136d1d6d7012103cc1f5c346b73eefe1929904ced16273a421cccd406628c3b23eea07e5546c466feffffff9f4f7f6352e7504ffb6f6bbd2be4861ace82e6d51768cbe0bf8e9f20b1a8b1f7000000006a47304402205b563fdb3eafc52a4667998896a44b96f43167ac71c3bf1c0b4414e5fa785f2c0220561c4c1af9b6939d0f78188a9e49526b769c03591465be32547ae231803e7a8201210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff6a815592fba2c60c761ec4807e583bf5197092a8d94e2632dc782aa461d32398000000006a47304402200e9bb70af6ff787d6e262fd7353eb1ee584233405249171642705b08d9db2210022079a9e91c36ffe84432aa42b0d9b777bb442727054c5bb310213365dc48b9c12101210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff6a7ba6a167cf31c91388275939448742e17aee89c0e8616f616bb7f5b27fb819000000006a47304402207e11b1c72e0ba0b45e895a6c99c710306a478cddedde569840b43385b416f01702206959c05ce71e544a444a5c07a10e28aed4d9159adbc072819e8bdf3e12c29dda01210365eef6378bf36bf4a078e186290ca85ba852cbb9b0def07749ecbdb13ac83b75feffffff0100e1f505000000001976a9142ba1bc3b9200c3541eac76fec775cefa45f4186b88ac56210000';

const ducatuscoreTx = new ducatuscore.Transaction(transaction);

const btc = new InternalStateProvider('BTC');
const rpc = btc.getRPC('BTC', 'regtest');

async function main() {
  let inputs = {};
  for (let input of ducatuscoreTx.inputs) {
    const txid = input.prevTxId.toString('hex');
    try {
      const tx = (await rpc.asyncCall('gettransaction', [txid])) as any;
      Object.assign(inputs, { [txid]: tx.hex });
    } catch (e) {
      console.log(e);
    }
  }

  console.log(JSON.stringify({ transaction, inputs }, null, 2));
}
main();
