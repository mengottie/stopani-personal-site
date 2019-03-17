import header from "./header";
import nav from "./nav";
import main from "./main";

import { footer } from "./footer";
import makeImage from "./image";
import iamgeUrl from "./images/copertina.jpeg"

const image = makeImage(iamgeUrl);
document.body.appendChild(image);
document.body.appendChild(footer);
