import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "@mui/material/Link";
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <ul className="ulFooter">
        <li>
          <Link href="https://wa.me/message/XBUQ2QDMKOOOF1">
            <WhatsAppIcon className="navIcons" />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/p/CbW3K_yAbuw/?utm_medium=copy_link">
            <InstagramIcon className="navIcons" />
          </Link>
        </li>
        <li>
          <Link href="https://l.wl.co/l?u=https%3A%2F%2Ft.me%2Fdaria_danilovich_yoga">
            <TelegramIcon className="navIcons" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
