import React from 'react'

export default class extends React.Component {
	render() {
		return (
	        <polyline ref="elem" onClick={ this.props.onClick } points="38.6302204 556.322634 39.0191964 556.146155 39.860177 554.548832 40.9532717 553.538574 42.2156431 552.614756 43.9822426 552.193366 46.8419368 551.519861 49.449517 551.437023 52.0552963 550.511404 54.9167914 548.744805 55.251743 549.585785 54.9996289 549.922538 54.4954006 550.763518 54.4954006 551.604499 54.6628764 551.941251 55.9252478 552.530118 57.4397332 552.614756 58.8695803 553.034346 60.6361798 553.28646 62.8223693 553.623213 64.5043305 554.127441 65.1778353 555.557288 65.4299494 556.987135 65.6820635 558.501621 66.3555683 558.923011 67.3640247 559.257963 68.5417578 560.183582 69.2981001 561.193839 69.6348525 563.380028 69.9716049 564.053533 70.5604714 564.305647 71.4860903 564.305647 73.0834132 564.894514 74.9346511 565.48338 76.7012506 565.566218 78.8028017 565.06199 80.3172871 565.06199 83.0923431 565.231266 85.1110567 565.90297 88.47678 567.080703 90.4954936 567.080703 92.2602923 565.820133 94.3636442 566.491837 96.2148821 567.080703 98.0643191 567.921684 100.083033 568.090961 102.35386 568.090961 103.952984 567.66957 105.802421 567.66957 107.401545 567.66957 110.261239 567.66957 111.773924 567.66957 113.203771 567.584932 115.811351 566.408999 117.999341 565.735494 118.671045 565.48338 120.185531 564.809876 121.95213 564.894514 124.55971 564.894514 126.074196 563.968895 128.260385 564.305647 129.101366 564.6424 131.708946 564.390286 134.14725 563.632143 136.250601 563.968895 137.260859 565.06199 139.110296 565.231266 140.372667 565.231266 143.232361 565.146628 145.335713 564.725237 147.606541 564.221009 149.960206 563.716781 152.148196 564.136371 154.503662 564.390286 155.764233 564.390286 157.363357 564.390286 158.623927 563.884257 159.886298 563.127914 160.642641 563.380028 161.316146 564.305647 162.493879 564.894514 163.586973 564.979152 165.01682 564.979152 166.279192 564.557761 167.372287 564.557761 168.843552 562.881203 170.703794 560.691412 173.331183 559.816216 176.612268 560.473513 180.442602 562.333755 182.850292 563.099101 186.351076 564.411895 188.978465 564.631595 190.509158 564.741445 192.698949 564.849494 193.683995 565.287092 196.199733 565.396941 199.045021 565.616641 202.655655 566.164088 203.640701 567.694781 205.283044 567.694781 208.346231 566.601687 211.519267 567.257183 213.379508 567.584932 214.254705 568.899526 213.599208 570.977667 214.695904 572.385904 213.013943 573.837361 211.823604 575.787644 209.983171 580.334702 209.116979 583.473522 207.92484 587.804482 207.384595 590.837055 207.058648 593.109684 207.276546 595.384113 207.92484 597.656741 208.574934 602.421698 208.358836 605.668567 206.084407 610.215625 203.811778 613.572345 201.971345 616.821015 199.696916 620.177734 198.072581 622.992408 196.01605 625.590984 193.417474 628.07971 190.6028 630.462189 187.138032 631.870426 183.741695 633.429932 181.036871 634.652685 179.299084 635.430637 175.349897 635.936666 173.019642 636.309435 170.689388 637.148615 169.012829 639.199743 166.961701 641.063587 165.097857 641.809124 163.140371 643.021072 162.861245 644.23122 162.394834 645.443169 160.718275 646.655117 158.667147 647.121528 156.896946 647.307012 156.617819 648.239834 155.964123 649.077213 153.914796 650.382804 151.95731 651.315626 150.187109 651.873879 149.907983 653.17947 150.466235 654.204134 150.839004 655.32244 150.745361 656.067977 149.254287 658.491874 148.042338 660.355718 146.459422 661.380381 146.178495 662.59233 146.178495 663.89612 145.899368 665.201711 145.153831 666.320017 144.035525 667.531966 142.450808 668.277503 140.86609 669.02304 138.164868 670.233188 136.301024 670.886884 134.529022 670.886884 133.317074 670.793242 132.665179 669.860419 130.707693 669.860419 129.589387 669.860419 127.725543 670.514115 126.515395 670.886884 125.676216 672.00519 124.276982 673.029854 123.252319 674.333644 123.250518 674.335445 121.725228 673.235147 120.597917 672.228491 119.259912 671.191222 118.553992 670.454688 117.938114 669.957663 117.336641 669.628114 116.915251 669.476846 116.82521 669.386805 116.313778 669.237337 116.223738 669.161703 115.74292 669.026642 115.472798 668.88978 115.290916 668.860967 115.110834 668.740312 112.254741 667.627409 112.07466 667.508555 111.622655 667.34288 111.111224 667.040343 110.540365 666.651367 109.91008 666.125529 109.277994 665.462829 108.285745 664.290499 107.172841 662.817432 106.796471 662.426655 106.526349 662.050285 106.1968 661.733341 106.104958 661.569467 104.47342 659.684014 103.610829 658.607126 103.310093 658.322598 102.919316 657.825573 102.678007 657.616678 102.557353 657.404182 101.905458 657.035015 100.047016 657.269121 99.9263618 657.240308 98.844072 657.375369 98.2425998 657.420389 98.1075386 657.389775 97.7023553 657.451003 94.3942581 657.344755 92.9518053 657.164674 92.2296784 656.984592 91.7488608 656.923364 91.6876331 656.863937 91.2680432 656.773897 90.0038711 656.231851 88.9215813 655.540338 87.5115431 654.423833 86.6813674 653.707109 85.3595692 652.324083 84.621235 651.421874 84.1116044 650.640321 83.8108683 649.977621 83.6451933 649.316722 83.6758071 649.255494 83.6001729 648.956559 83.5101321 648.113777 83.3300506 647.694187 83.2994368 647.571732 83.3300506 647.512305 83.1643757 646.97026 83.1643757 646.790178 83.0581276 646.370588 83.0437211 645.949198 83.0887414 645.632254 83.3894775 645.063197 83.8558886 644.506745 85.0282192 643.318207 85.4045895 642.821182 85.6296914 642.280937 85.750346 641.558811 85.7197322 641.123013 85.750346 641.018566 85.6603053 640.537749 85.6891183 640.357667 85.6440979 639.936276 85.7953664 638.612677 85.8097729 637.949977 85.7647525 637.530387 85.584671 637.047769 85.4045895 636.777647 85.0876461 636.538138 84.9831988 636.403077 83.900909 635.830418 83.7802544 635.725971 83.2850303 635.500869 82.6385377 635.093885 81.9164109 634.748128 80.9385683 634.342945 80.7134664 634.207884 80.4721572 634.146656 80.2920757 634.027802 79.7518312 633.84592 78.5488868 633.291269 77.3459424 632.945512 75.7216072 632.599756 74.9994804 632.372853 74.5042563 632.282812 74.4592359 632.223386 74.2791544 632.178365 73.8883775 631.953263 73.4525803 631.531873 73.1356369 631.124888 73.0041774 631.033047 72.8961285 630.899787 72.4747377 630.584644 72.1145747 630.373949 70.9710572 629.907537 69.1666406 628.690187 67.5134924 627.757364 67.2883905 627.591689 66.7463452 626.93079 66.2799341 626.525607 65.5596081 626.269891 64.7168267 626.149237 63.4850692 625.864708 62.9430239 625.533358 62.6873081 625.232622 62.6873081 625.171394 62.3721655 624.690576 62.0714294 623.96845 61.7562868 623.428205 61.0197534 621.623788 60.3732609 620.361417 60.0725247 619.880599 60.0419109 619.759945 59.2747637 618.661448 59.290971 618.618228 58.9434137 618.196837 58.327535 617.294629 58.1024331 617.05332 57.9817785 616.812011 57.5765951 616.271766 57.2902655 615.670294 57.3208794 615.610867 57.110184 615.070623 56.9751229 613.986532 57.0201433 612.664734 56.9895294 611.521216 57.0201433 611.341135 56.9751229 610.964764 57.003936 610.919744 56.8544683 609.115327 56.7644276 608.573282 56.7950414 608.515656 56.6887933 608.033038 56.5681387 606.831894 56.6293664 606.230422 57.1209889 605.456071 57.4253267 605.01127 57.7116563 604.424204 57.8161035 603.703878 57.801697 603.161833 57.7422701 602.621588 57.6216155 602.140771 57.6522294 602.079543 57.3208794 600.757745 56.8544683 599.553 56.2674026 598.531938 55.5614831 597.509075 55.4858489 597.328993 55.260747 597.087684 54.5836406 596.185476 54.5386202 596.066622 54.1190303 595.584003 53.6364119 594.923104 51.4268119 592.578443 50.7659128 591.737462 49.3828868 590.172554 49.3828868 590.113127 48.8120285 589.452228 47.0976526 587.586584 46.8275303 587.226421 46.4817738 586.563721 46.285485 585.947842 46.1954442 584.761105 46.2404646 584.64045 46.2548711 584.204653 46.3755258 583.664409 46.5105869 583.318652 46.5412007 583.001709 46.616835 582.836034 46.645648 582.234562 46.3899323 581.2135 46.4205461 581.152272 46.2710785 580.671454 46.1954442 580.069982 46.2404646 579.482916 46.5105869 578.852631 46.8275303 578.38622 47.7441452 577.543439 48.5707193 576.673645 49.352273 575.935311 49.5539642 575.675993 49.8186841 575.378859 49.9987656 575.018696 50.1338267 574.71796 50.2995017 574.116488 50.344522 572.913543 50.2544813 572.373299 49.1415776 569.486592 47.9836536 567.019476 47.2020998 565.757104 46.4655665 564.674814 45.2788294 563.156727 44.2865803 562.090645 41.4142804 559.322792 39.6710915 557.383314 38.6302204 556.322634"></polyline>
		)
	}
}
