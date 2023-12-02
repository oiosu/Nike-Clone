import React from "react";
import "./EventPage.css";
import PackageInfo from "./PackageInfo";

import package1 from "../assets/package1.png";
import package2 from "../assets/package2.png";

const title1 = "나이키 홀리데이 패키지";
const title2 = "나이키 홀리데이 패키지";

const content1 =
  "따듯한 선물이 더 큰 감동이 되도록, 기프트 컬렉션 15만원이상 구매한 멤버 대상으로 추첨을 통해 홀리데이 짐색과 특별한 슈박스 오너먼트를 증정합니다. 홀리데이 짐색에 선물을 담아 마음을 담아보세요. ";
const content2 =
  "따듯한 선물이 더 큰 감동이 되도록, 기프트 컬렉션 15만원이상 구매한 멤버 대상으로 추첨을 통해 홀리데이 짐색과 특별한 슈박스 오너먼트를 증정합니다. 홀리데이 짐색에 선물을 담아 마음을 담아보세요. ";

const EventPage = () => {
  return (
    <div className="event-package-box">
      <div className="event-title">멤버들을 위한 특별한 연말 혜택</div>
      <div className="event-package-infos">
        <PackageInfo image={package1} title={title1} content={content1} />
        <PackageInfo image={package2} title={title2} content={content2} />
      </div>
    </div>
  );
};

export default EventPage;
