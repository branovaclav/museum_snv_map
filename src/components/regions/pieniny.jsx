import React from 'react'

export default class extends React.Component {
	render() {
		return (
		<polyline ref="elem" onClick={ this.props.onClick } className={ this.props.active ? 'active' : '' }
		points="625.085438 167.835513 624.087787 166.739717 622.854229 164.241986 622.214939 162.471785 622.087081 161.623601 621.741325 160.148734 621.62067 159.426607 621.500016 157.982353 621.590057 156.748795 621.741325 155.965441 622.056468 154.79311 622.133903 154.083589 622.23835 153.287629 621.771939 152.05407 621.033605 150.971781 619.710006 149.496913 618.597102 147.962619 618.175711 147.436781 617.318523 146.667833 616.655823 146.232035 614.790179 145.283906 614.068052 144.892589 613.315312 144.486325 612.488737 143.945721 611.179545 143.298868 610.30615 142.727109 609.659657 142.275285 608.833083 141.508678 608.456713 140.861645 608.170383 140.108364 607.929074 139.296016 607.779606 138.544176 607.568911 137.430552 607.372622 136.287215 607.206947 134.963796 607.1025 134.361243 607.041272 133.699443 607.041272 132.916629 607.14752 132.135256 607.388829 130.931591 607.538297 130.209284 607.794013 128.975906 607.808419 128.01283 607.642744 127.320236 607.313195 126.478355 606.830577 125.243536 606.515434 124.52267 606.304739 123.679349 606.364166 123.10759 606.574861 122.565544 607.012459 121.903925 607.462663 121.36188 608.125363 120.067994 608.215403 119.165426 608.215403 118.443119 608.200997 117.601238 608.035322 116.127091 608.064135 115.404964 608.139769 114.697424 608.462115 113.536438 608.636794 112.756505 609.283287 111.914624 609.991007 109.867458 610.6375 108.904382 612.744453 108.739067 613.691682 108.213229 613.878967 107.077275 614.790179 106.858656 615.993123 106.789324 616.580189 107.610496 617.829955 108.213229 618.79159 108.422844 620.597807 108.965069 621.86198 109.38592 623.426888 110.032952 624.809914 110.529257 625.953431 110.981082 627.880303 111.673855 628.962593 111.944157 630.887664 112.771272 631.730446 113.087495 632.992817 112.406427 634.503701 111.665031 636.814147 111.753631 638.05851 111.428764 638.888686 111.013676 639.628821 110.331348 640.192476 109.532146 641.762786 109.264905 642.800056 108.849817 643.037763 107.842441 642.83067 107.102486 642.740629 106.00507 642.562348 104.938627 642.533535 103.634297 642.414681 102.152946 642.267015 100.997903 642.178775 99.9019274 642.000494 99.1898851 641.110891 97.6863846 639.983581 95.6170681 639.520772 94.3836899 639.108385 92.4294455 639.005739 91.7101999 640.086228 90.5787479 640.149256 90.0042879 640.149256 88.8773378 640.017797 87.5079981 640.061016 86.7132984 640.635476 85.4977483 641.076676 84.5258484 640.988436 83.1123887 641.055066 81.698749 641.474656 79.0268797 641.874437 77.5557939 640.440988 76.2647897 638.863474 74.3535847 638.433079 72.7272686 638.575344 70.5279333 639.531577 68.6152876 641.802404 62.8119812 641.651136 61.1251578 640.941615 59.8962816 639.987183 58.8446056 638.121538 58.1268008 636.353138 57.5049793 634.781027 56.6497723 633.48444 55.6881371 632.288699 55.0191343 631.332466 53.6793279 630.711185 51.5287946 630.662563 49.5687876 631.427909 48.1817998 632.33552 46.6988287 633.316964 45.9649966 635.047547 45.2498929 636.961814 44.3903639 638.528523 43.6694977 639.819707 42.0919837 640.010593 40.5618312 639.531577 38.9355152 638.958917 38.0271841 637.57229 36.7849819 636.567435 36.5456536 634.36864 36.7361798 633.363785 36.4024888 632.168044 35.4453556 630.017871 34.8721562 628.152226 34.7289914 627.340059 34.3463182 626.909664 33.6285133 626.909664 31.8118511 627.316648 29.8813774 627.412091 29.0688497 628.415145 27.4427137 629.992659 24.8135238 630.089903 22.9968616 629.992659 21.7532188 629.085049 20.3662311 626.693566 17.6410577 624.829723 16.3028721 623.778047 16.0635438 622.151911 16.1109052 620.525775 16.3988555 618.757375 17.0204969 616.988974 17.880386 615.98592 17.929008 614.741557 17.5465149 613.354929 16.8758914 612.589583 16.2068886 611.777416 14.3900464 611.298399 13.0518607 610.677118 12.6207456 609.050982 12.9086959 607.021463 13.3675436 604.676802 13.3207224 602.524828 12.3164079 599.177113 13.0813941 597.983173 12.9854107 596.547923 12.4123913 595.400804 11.6945865 593.870111 11.3607153 592.946293 11.2063855 591.709133 10.6972951 590.475575 10.1656945 588.516288 10.2130559 584.594113 10.8348774 582.108988 11.8865533 581.057312 12.6515395 579.335733 14.8982364 578.139992 16.2378626 576.944251 17.0502103 575.510802 17.5760483 573.598336 18.7237077 572.020822 19.3928906 569.82743 20.2007362 567.812318 21.3528976 566.16097 23.5088333 565.548693 24.3069546 562.813255 25.1592803 561.354595 25.5857133 560.565838 26.6215421 559.908541 29.8500433 558.873072 29.7292086 557.165899 29.3022353 555.948548 29.3022353 553.517448 30.3375239 550.355217 31.5563155 547.513531 32.0891766 544.756483 32.4306112 543.051111 32.2474683 540.677637 32.4912986 540.787487 29.9330608 540.538974 28.4101116 539.984323 26.7056402 538.880424 24.7544571 537.839553 23.4148308 535.642558 21.8920616 533.874158 21.404581 529.242462 20.3691124 527.657745 19.8211244 526.006397 18.2969145 524.292021 15.8613122 523.917452 13.4240892 523.966074 10.2559153 523.476252 9.58673248 522.620865 9.03730382 521.281059 8.97679643 518.844556 8.91610897 517.812689 9.46409697 515.875012 12.2070984 514.846747 14.2157275 514.751303 15.4462244 514.616242 17.2009385 514.816133 23.6563201 515.325763 27.3348449 515.880414 28.9802496 515.639105 29.5889251 514.175043 29.22408 512.408443 28.6139638 510.402335 28.8572539 509.246212 29.9535901 507.798357 33.1233847 507.137458 33.7853643 506.557595 34.5254993 504.528077 37.7540004 503.96082 39.7096855 504.061666 43.2958286 503.886986 45.307519 503.49801 45.9070103 502.858721 46.8909756 499.885575 49.8156793 497.157341 52.373737 496.186701 53.4697131 494.353472 51.9467638 492.826381 50.6676449 491.727883 49.9379546 489.779402 50.0812995 488.320741 50.6897949 486.498317 51.8464584 485.650133 52.881747 484.864977 54.5878391 483.894338 55.6245683 482.804845 57.1475176 481.902637 59.9494056 481.663128 61.0453817 480.750115 61.2285245 478.005673 60.1930559 475.806878 58.2434936 472.392533 57.0248821 471.049125 56.5374014 470.136111 56.476894 468.74048 57.6348181 467.831068 58.3645083 466.914453 58.4019653 465.452192 57.4516752 463.003083 54.0412917 460.251438 51.1979849 459.030485 50.5288021 457.683476 48.7016951 457.132426 48.0312517 455.951092 47.726914 454.209703 47.726914 453.049979 47.3001208 451.767798 46.2025241 450.973639 45.6545361 449.387121 45.654356 447.409826 45.561614 445.861125 45.057926 444.30342 44.5380307 442.22528 42.9797855 439.952651 41.3563508 437.418904 39.4082291 435.601882 37.978382 433.197794 37.6549556 431.964236 37.1350603 429.821266 36.2251085 427.359552 36.0995917 426.05216 33.9357324 425.438082 32.7599802 424.845614 32.1381588 423.956011 30.0511943 424.364796 28.6199065 424.415219 27.0350092 424.467443 25.1931356 423.750718 23.4562495 422.012932 22.1268879 419.763714 21.2066714 418.22942 20.6956001 416.388987 20.5419906 414.548554 20.286455 413.066483 19.5700907 411.276473 18.9054099 409.947471 17.9851935 409.230747 16.4519796 407.748676 15.6839319 406.252199 14.9555023 404.88538 14.2025815 402.891878 13.3326078 401.154092 11.9530034 399.569374 9.19235399 398.290796 7.45384717 396.322505 6.25162307 393.077436 5.31213788 389.828766 4.8203353 388.397118 4.92226143 386.659332 5.79223516 385.737314 6.25126291 382.875819 5.58694225 380.370885 5.38308999 377.50759 5.3314066 375.14492 4.19869396 373.979793 3.59307987 373.1118 3.90011883 373.826724 5.99608742 375.566311 7.47905858 376.486528 8.34903232 375.308794 8.75673684 373.826724 8.86010362 372.575157 8.57791591 371.602717 7.35192104 370.682501 6.17472827 369.295873 5.67950414 367.768782 5.35805866 366.337134 3.56786846 365.519564 1.2680476 364.087916 0.705292912 362.452776 0.5 360.509697 1.52394342 358.975402 2.64765199 358.516194 4.33447541 358.310902 6.94277587 358.463971 9.1406706 358.361324 10.8791774 357.646401 12.6176842 357.594177 13.741753 358.157832 14.4581172 359.180695 14.3045076 360.968905 14.048972 362.758915 14.4064338 363.518859 14.9131831 364.293209 15.4283963 364.395856 16.4519796 363.526062 18.138803 362.553622 20.286455 361.786475 22.228814 361.838698 24.5298955 362.19706 25.9094998 361.941345 26.8297163 360.299001 28.3569875 359.513846 29.0216683 358.228064 28.2964801 357.237616 24.3379286 356.432652 20.6822741 355.089244 19.8906358 353.807063 19.1195268 351.916207 17.9010954 349.350046 15.7091434 347.642873 15.1611554 346.852316 15.5260005 346.005933 17.0487696 344.793984 18.5110314 344.18891 19.6070075 344.014231 21.7398928 345.31622 22.4090756 347.628467 23.6595616 348.566692 24.4724495 349.254603 26.3483585 349.254603 28.4117323 349.317631 29.4747534 350.693454 30.9128843 351.94322 32.6011483 352.443846 33.4765245 352.881444 34.3519007 353.256014 36.7905644 353.068729 38.1037187 354.006954 39.2917164 356.758599 41.9178449 358.759305 43.7312656 360.38544 44.9817516 361.885519 45.7321512 363.69894 46.5450391 365.699646 46.9826371 367.450038 48.4832563 370.32774 49.5462774 373.140613 50.4841418 375.391632 51.3596981 376.954739 51.7972961 378.580875 52.0474294 381.206464 53.4230719 383.583539 54.1108032 385.207875 54.0483149 386.960068 53.3605837 388.272862 51.7348079 390.523881 51.3596981 392.524586 52.0474294 393.963437 52.4225391 396.02537 52.797829 397.620893 52.7664948 399.933139 51.8911186 402.184158 52.391385 404.561234 52.5163616 406.749224 52.8289831 409.1263 53.7670276 410.813663 53.3917378 412.252514 53.7670276 414.127163 55.0175136 416.066641 56.1430229 419.192856 57.0183991 421.631159 56.7682659 422.69364 56.0180464 424.820402 55.1424901 426.664437 55.3614692 428.477858 55.5489341 430.103994 55.6740907 431.229503 56.2993337 432.228955 57.2371981 432.979895 58.3002192 433.793864 59.1131071 435.356971 60.11364 438.106816 61.1139927 438.733499 60.1761282 440.734205 59.1755954 442.421568 59.6758618 443.547078 60.7388829 446.673293 61.6767474 448.61277 61.4891025 449.261064 62.2838021 449.89315 63.5454531 451.515684 63.8159355 453.316499 64.0862379 455.66116 64.897325 457.191853 65.6181912 458.094061 66.4292783 459.896677 67.2403654 461.517411 67.7811501 463.049904 67.6008885 465.122642 68.0514525 466.655136 67.6909293 469.178078 68.3217548 469.808363 69.4033243 470.080286 70.6649753 471.160775 72.7377134 472.693269 74.0894051 474.946088 74.6301899 476.2985 73.4585796 477.559071 74.4499283 478.911483 74.9004922 480.262094 75.5313177 480.984221 76.9732303 480.352135 77.7843174 480.082013 79.3164508 480.984221 80.9384449 482.154751 81.8397528 484.769534 82.1100551 485.850023 82.8311014 486.842272 83.4619269 489.545296 84.0927524 492.608482 84.6333571 494.411098 85.7147465 495.887766 86.6992521 497.476085 88.3282694 497.926289 89.4096588 498.466533 90.9417922 500.629312 92.2934839 503.062213 93.5551349 503.964422 92.8342687 505.496915 93.1947918 506.487363 94.6367044 507.027608 96.1686578 508.109898 97.6105703 510.002554 98.0611343 511.985252 98.5116982 513.787867 98.7821806 515.048438 99.5932677 515.498642 100.674657 515.860605 102.026349 516.130728 102.927657 516.130728 104.009046 516.761013 105.360738 517.753262 106.081784 521.266652 106.982912 522.709105 107.523697 524.331639 108.244563 525.412128 109.05565 526.6745 110.768045 528.747238 110.497563 531.090098 109.956958 532.532551 109.05565 534.153284 108.515045 535.775819 107.523697 538.480643 106.622389 541.63387 105.901523 544.788898 106.081784 547.31184 105.450959 549.114456 106.081784 550.465067 107.253394 551.457316 108.695307 553.890217 110.046999 555.062548 110.768045 555.782874 112.029696 556.863363 112.660522 558.575938 113.381388 561.550884 114.192475 563.443541 114.913521 565.154315 115.994911 565.786401 116.896039 565.966482 118.24791 565.606319 119.239079 565.69636 120.050166 567.137012 121.582299 568.399384 122.573648 568.939628 123.564817 571.644452 125.727776 571.644452 127.079467 571.282488 129.422688 571.192448 131.315164 571.282488 132.576815 572.274737 135.280379 573.265186 137.443158 576.060051 139.425855 577.952707 139.696157 579.755323 139.876419 580.205527 140.867768 580.835812 142.039378 581.466097 143.120767 581.828061 144.202157 584.531084 145.554029 585.701614 146.365296 587.054026 147.355744 588.285784 147.939208 590.479176 148.708156 592.822037 149.518523 594.894775 150.060568 595.705142 151.591261 595.705142 152.673551 596.877472 153.303836 598.95021 153.75404 601.293071 154.566207 603.095686 155.286533 603.725972 156.278782 604.988343 156.819027 607.061081 156.00866 608.681815 155.916819 610.39439 157.449312 610.214308 158.621643 610.846394 160.154136 611.926883 161.594788 612.557168 163.127282 614.719947 164.027689 616.612604 163.667526 617.514812 162.767119 618.685342 162.044992 621.660288 162.044992 622.402224 163.127282 622.854229 164.241986 624.087787 166.739717 625.085438 167.835513"></polyline>
		)
	}
}
