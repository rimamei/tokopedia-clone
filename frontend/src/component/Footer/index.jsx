import { animasiFooter, android, ios, ic_license } from '@/assets';
import { Language } from '@/parts';
import * as Fa from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 pb-20 overflow-hidden">
      <div className="grid grid-cols-12 my-10 mx-10 sm:flex md:flex lg:flex sm:flex-col lg:flex-col md:flex-col flex-wrap">
        <div className="col-start-1 col-end-7 flex justify-between sm:flex sm:flex-col">
          <ul className="mb-5">
            <li>
              <h4 className="h4-footer">Tokopedia</h4>
            </li>
            <li>
              <p>Tentang Tokopedia</p>
            </li>
            <li>
              <p>Hak Kekayaan Intelektual</p>
            </li>
            <li>
              <p>Karir</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Bridestory</p>
            </li>
            <li>
              <p>Tokopedia Parents</p>
            </li>
            <li>
              <p>Mitra Blog</p>
            </li>
            <li>
              <p>TokoPoints</p>
            </li>
          </ul>
          <div>
            <ul className="mb-5">
              <li>
                <h4 className="h4-footer">Beli</h4>
              </li>
              <li>
                <p>Tagihan & Top Up</p>
              </li>
              <li>
                <p>Tukar Tambah Handphone</p>
              </li>
              <li>
                <p>Tokopedia COD</p>
              </li>
            </ul>
            <ul className="mb-5">
              <li>
                <h4 className="h4-footer">Jual</h4>
              </li>
              <li>
                <p>Tagihan & Top Up</p>
              </li>
              <li>
                <p>Tukar Tambah Handphone</p>
              </li>
              <li>
                <p>Tokopedia COD</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="mb-5">
              <li>
                <h4 className="h4-footer">Bantuan dan Panduan</h4>
              </li>
              <li>
                <p>Tokopedia Care</p>
              </li>
              <li>
                <p>Syarat dan Ketentuan</p>
              </li>
              <li>
                <p>Kebijakan Privasi</p>
              </li>
            </ul>
            <ul className="mb-5">
              <li>
                <h4 className="h4-footer">Keamanan</h4>
              </li>
              <li>
                <img src={ic_license} alt="" />
              </li>
            </ul>
            <div className="mb-5 sm:mb-5">
              <div>
                <h4 className="h4-footer">Ikuti Kami</h4>
              </div>
              <div className="flex justify-between sm:w-1/2">
                <div className="footer-icon bg-instagram">
                  <Fa.FaInstagram />
                </div>
                <div className="footer-icon bg-twitter">
                  <Fa.FaTwitter />
                </div>
                <div className="footer-icon bg-facebook">
                  <Fa.FaFacebookF />
                </div>
                <div className="footer-icon bg-pinterest">
                  <Fa.FaPinterestP />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-8 col-end-13 flex flex-col justify-between">
          <img src={animasiFooter} alt="" className="contain" />
          <div className="flex justify-center mt-5">
            <img src={android} alt="" className="h-40px w-135px mr-5" />
            <img src={ios} alt="" className="h-40px w-135px" />
          </div>
          <h1 className="self-center text-gray-400 my-5">
            &copy; 2009 - 2021, PT Tokopedia. Rima Mei Handayani.
          </h1>
          <div className="flex self-center bg-gray-200 rounded-md p-1">
            <Language />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
