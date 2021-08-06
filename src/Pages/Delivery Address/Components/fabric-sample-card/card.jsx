import React from "react";
import { withStyles, Checkbox } from "@material-ui/core";
import styles from "./card.module.scss";
//icons
import { ReactComponent as CheckedIcon } from "../../../../Images/icons/checkbox-active.svg";
import { ReactComponent as CheckBoxIcon } from "../../../../Images/icons/checkbox.svg";

const CustomCheckbox = withStyles({
  root: {
    color: "rgb(133, 114, 80)",
    "&$checked": {
      color: "#fff",
    },
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />);
export default function FabricSampleCard() {
  const img =
    "https://s3-alpha-sig.figma.com/img/2734/92e9/330212fc8e8bfb1e70d6279735182b79?Expires=1627257600&Signature=To6fQbSs3ZZRqsIMzaNF5IhAZBdwTtOc1WJcDYosGZaMTy8oE-MhFkzvQldzA22ybS~ByFJ9jfSJrfbhYZ-nCCsOKYF8pAu2tCqZXT7rPXnl~5vSKPU5Zn0I-AbsafFQF0BU1Q4NXkkvFVFFwsbGJD~NmZ0VutYV7RiiJmv5-fsDqug~d6bcK80zZOcKa0yr5OqIyThLkdjUsJ8rS2Oux-TPpgZrepE6BUlmPWhpDfWmH7hgM1uIiPXopeBguPjrF~B5lIuD3~kjrdChnVMCCfnKBYff-3Pwb07R9E7k9WX~1-oQ1vEVcWyEOj3OYXIHPbWyeRSMAdlaknu0Durigw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <div className={styles.mainContainer}>
      <CustomCheckbox icon={<CheckBoxIcon />} checkedIcon={<CheckedIcon />} />
      <div className={styles.container}>
        <img src={img} alt='fabric' />
        <div>
          <span>Mid Brown Strip Wool Silk</span>
          <span>$599</span>
        </div>
      </div>
    </div>
  );
}
