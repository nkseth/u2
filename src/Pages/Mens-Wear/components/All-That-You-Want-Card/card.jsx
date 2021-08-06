import React from "react";
import { Link } from "react-router-dom";
import Off from "../../../../Images/icons/fiftyOff.svg";

export default function AllThatYouWantCard() {
  const img =
    "https://s3-alpha-sig.figma.com/img/06df/53ea/36643e06cce33e865b3d7c0610d08f53?Expires=1624838400&Signature=JL6wJo-ZpPZBJU4562yBUZUuth2vXTzKlXt~ax49yAFEI2SCFA8mnm3HviCkZqxKFCcku8q1aN~-sbsuRp1l-ah3Ipj9D3Ja1VHHQQJgsc38T00lf3XxDp3gSPYukvwg9XpuFwInB7QMiPFFmreAlQCelIyGLfWSJvEdP-hPEdKD5Qk7IAtGJlOv12TCdlccp1QwFjlKwansW4N6W0EgigtRqxXOkUE0hWIpGk3TJGiITEyG2k0I0xHIeCF7lks-TJ5hgMurfcN87mQ4qwgPCFEnoEEiAAWAkIOFBRWaHImimtpXqv7XQcGCJTNOlSbgDu4wPpH45zFAG~qm5950vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <div>
      <img src={img} alt='shirts and trousers Designers' />
      <div>
        <div>
          <span></span>
          <img src={Off} alt='50%' />
        </div>
        <span>Shirts &amp; Trousers Designers</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
          adipiscing.
        </span>
      </div>
    </div>
  );
}
