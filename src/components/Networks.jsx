import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Networks() {
  return (
    <div>
      <ul className="lista">
        <li>
          <a href="https://github.com/JuanIgnacioMarcosMerlo?tab=repositories" target='_blank' className="">
            <GitHubIcon
              className="icons"
              sx={{
                padding: ".7rem",
                fontSize: 60,
                backgroundColor: "#fff",
                borderRadius: "100%"
              }}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/juan-ignacio-marcos-merlo-8968aa270/" target='_blank' className="">
            <LinkedInIcon
              className="icons"
              sx={{
                padding: ".7rem",
                fontSize: 60,
                backgroundColor: "#fff",
                borderRadius: "100%"
              }}
            />
          </a>
        </li>
        <li>
          <a href=" https://wa.me/5491144353917" target='_blank' className="">
            <WhatsAppIcon
              className="icons"
              sx={{
                padding: ".7rem",
                fontSize: 60,
                backgroundColor: "#fff",
                borderRadius: "100%"
              }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Networks;
