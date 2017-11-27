import React from "react";
import { Heading, Text, Link } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class IranStats extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={6} lineHeight={1.7}>
          چه کسانی تحت تاثیر این موضوع قرار می گیرن؟
        </Heading>
        <br />
        <Text
          textSize="0.8em"
          style={{
            lineHeight: "170%"
          }}
        >
          سخنگویی درباره آمارهایی که مسئولان این حوزه ارائه می‌کنند، می‌گوید:
          آمارهای ارائه شده تخمینی است، برای نمونه براساس آمارهای جهانی می‌گویند
          ۱۰ تا ۱۵ درصد افراد جامعه را معلولان تشکیل می‌دهند، بنابراین مسئولان
          آمار، معلولان کشور را حدود ۱۲ میلیون برآورد می‌کنند.
        </Text>
        <br />
        <Text textSize="0.5em">
          منبع:{" "}
          <Link
            href="http://jamejamonline.ir/sara/1692072956463992174/%D8%A2%D9%85%D8%A7%D8%B1-%D9%85%D8%B9%D9%84%D9%88%D9%84%D8%A7%D9%86-%D8%A8%D9%87-%D8%B1%D9%88%D8%B2-%D9%86%DB%8C%D8%B3%D8%AA"
            target="_blank"
          >
            مقاله «آمار معلولان به روز نیست» در جام جم
          </Link>
        </Text>
      </Wrapper>
    );
  }
}
