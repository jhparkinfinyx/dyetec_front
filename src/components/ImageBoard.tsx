import React, { useState } from 'react';
import { observer } from "mobx-react";
import styled from 'styled-components';

import BoardUtil from './Board/BoardUtil';
import Paging from './Board/Paging';
import GalleryItemList from './GalleryItemList';

const Div = styled.div`
  display: flex;
	flex-direction: column;
	width: 100%;
  margin-top: 20px;
  @media (min-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

const ImageBoard = observer(({}) => {
  
  return (
    <Div>
      {/* <div className="content"> */}
				<BoardUtil />
				<GalleryItemList />
{/* 				
				<ol className="list-item" id="list">
									<li onClick="location.href=&#39;product_detail.php?idx=128&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0117@YP@_1840.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0117</div>
						<div className="txt">POLYAMID<br>PA 84%, PU 16%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=127&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0116@SN@578134.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0116</div>
						<div className="txt">ACETATE<br>ACE 71%, PES 29%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=126&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0115@SN@19063A.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0115</div>
						<div className="txt">POLYAMID<br>PA66 77%, PU 23%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=125&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0114@SN@627865.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0114</div>
						<div className="txt">POLYESTER<br>PES 100%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=124&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0113@SN@14028A.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0113</div>
						<div className="txt">POLYESTER<br>PES 87%, PU 13%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=123&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0112@SN@160277-2L.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0112</div>
						<div className="txt">POLYESTER<br>PES 100%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=121&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0110@SC@SP-Q040_SOLID.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0110</div>
						<div className="txt">POLYAMID<br>PA 79%, PU 21%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=120&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0109@SC@SP-L090_SOLID.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0109</div>
						<div className="txt">POLYESTER<br>PES 85%, PU 15%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=119&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0108@SC@SC-280_FOIL_BLUE_VINTAGE.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0108</div>
						<div className="txt">POLYAMID<br>PA 81%, PU 19%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=118&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0107@SC@SP-L050_BND_SP-L050.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0107</div>
						<div className="txt">POLYAMID<br>PA 77%, PU 23%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=117&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0106@SC@SPN-8899_BURIM_HTP_DENIM.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0106</div>
						<div className="txt">POLYESTER<br>PES 57%, PA 32%, PU 11%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=115&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0104@SC@SP-Q018_BR_SOLID.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0104</div>
						<div className="txt">POLYAMID<br>PA 47%, PES 31%, PU 22%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=114&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0103@SC@CE-19005.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0103</div>
						<div className="txt">POLYESTER<br>PES 100%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=113&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0102@SC@SP-H021_PRINT_DECAL_PRINT.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0102</div>
						<div className="txt">POLYESTER<br>PES 83%, PU 17%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=112&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0101@DS@GAIN-1515.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0101</div>
						<div className="txt">POLYESTER<br>PES 85%, PU 15%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=111&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0100@DS@GAIN-1853.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0100</div>
						<div className="txt">POLYURETHANE<br>F: PU 100% / B: LI 100%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=110&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0099@DS@LAMSIA-1154.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0099</div>
						<div className="txt">POLYURETHANE<br>F: PU 100% / B: PES 70%, PU 30%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=109&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0098@DS@BONTEX-1498.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0098</div>
						<div className="txt">POLYURETHANE<br>F: PU 100% / B: PES 100%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=108&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0097@DS@LAMSIA_P_PR-1071.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0097</div>
						<div className="txt">POLYURETHANE<br>F : PU 100% / B : PES 93%, SP 7%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=107&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0096@DS@BELLINA-1002.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0096</div>
						<div className="txt">POLYURETHANE<br>PU 100%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=106&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0095@DS@TF-1374.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0095</div>
						<div className="txt">POLYESTER<br>PES 100%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=105&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0094@DS@INOSPO_HYDRO-1046.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0094</div>
						<div className="txt">POLYESTER<br>F: PES 100% / B: PU 100&amp;</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=104&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0093@DS@TF-1611.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0093</div>
						<div className="txt">POLYESTER<br>PES 100%</div>
					</li>
									<li onClick="location.href=&#39;product_detail.php?idx=103&amp;search=&amp;cate1=0&amp;cate2=0&#39;;">
						<div className="fabric_list_thumb" style="background-image: url(&#39;/upload/fabric/title/TA01Y-0092@DS@GAIN-1921.png&#39;), url(&#39;/pages/images/noimg2.gif&#39;);"></div>
						<div className="tit">TA01Y-0092</div>
						<div className="txt">POLYURETHANE<br>F: PU 100% / B: PES 100&amp;</div>
					</li>
								</ol>
*/}
				<Paging />
				
			{/* </div> */}
    </Div>
	)
});

export default ImageBoard;







