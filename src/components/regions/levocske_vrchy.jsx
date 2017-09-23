import React from 'react'

export default class extends React.Component {
	render() {
		return (
	        <polyline ref="elem" onClick={ this.props.onClick } points="700.955576 483.290582 700.955576 481.954377 700.878141 480.4579 701.901004 477.625218 702.529488 476.366448 703.94673 475.97387 705.047028 474.556629 705.520642 472.433468 706.856847 470.465177 705.441406 470.22927 703.159773 470.465177 701.427389 471.095462 700.091185 470.938791 698.989086 469.600786 699.068322 467.632495 698.358801 466.688868 697.022596 465.901912 696.156404 464.092093 696.156404 461.889696 696.586799 460.600312 694.987675 460.386015 693.433572 460.15371 691.710192 461.136955 690.746756 462.129204 689.333116 462.368713 687.95009 462.775697 686.988455 463.377169 685.515388 463.062026 684.37187 462.941372 682.688108 463.767946 680.943119 464.338804 679.920256 464.954683 678.747925 466.05318 677.064163 464.608927 676.026894 463.287128 675.229133 462.203038 674.598847 461.241403 674.267497 459.84397 675.063458 458.776087 673.997375 456.865422 672.432467 454.987172 671.29075 454.205618 669.801476 453.000873 668.778613 452.159892 667.71073 451.18205 666.734688 450.206008 666.147622 449.181344 665.470516 447.378729 664.118104 445.39423 662.67385 443.694261 661.861683 442.747032 661.276418 441.664743 660.900047 440.461798 659.967225 438.716808 658.884935 436.521615 658.389711 435.079162 657.998934 433.935644 657.066112 432.431964 655.321123 430.087303 654.345081 428.73309 652.870213 427.454511 651.984212 426.658551 650.390491 424.839728 649.243372 423.685405 646.345861 420.928358 643.592414 418.418021 642.029307 417.321325 640.947017 416.885528 639.744073 417.335732 639.38391 418.598103 638.510514 419.65158 637.127488 419.185169 635.443726 419.154555 634.165148 419.786641 633.023431 420.960772 632.014975 421.562245 630.691376 421.711712 628.948187 422.673347 627.624588 423.080332 625.679707 422.390619 624.813515 420.643829 624.5578 419.500311 623.925714 417.937204 623.158566 415.713197 622.151911 414.027634 621.39917 412.644609 621.879988 410.899619 622.200533 409.493182 621.098434 408.720633 620.001738 408.36047 618.633118 408.900714 616.196616 407.593322 613.7313 406.824374 611.476679 406.269723 609.852344 405.893353 608.408091 405.623231 607.266374 405.547597 605.82212 405.57641 603.686354 405.516983 600.281012 404.712018 597.837307 404.105144 595.056848 403.802607 593.673822 403.953875 592.395244 404.794856 592.139528 406.028414 592.243975 407.532095 591.808178 409.336511 591.883812 410.823985 592.485284 411.863055 592.499691 413.667471 591.386787 414.98927 590.15503 415.907685 589.070939 416.615406 588.019263 417.366346 586.891953 418.493656 586.456156 419.892889 588.213751 423.080332 589.087146 424.041967 590.290091 425.605074 590.95099 426.989901 590.335111 428.327907 589.252821 428.643049 587.824775 428.072191 586.636237 426.447856 585.553947 425.907611 584.050267 426.222754 581.372455 426.296587 579.387957 425.666302 578.20122 425.019809 577.102722 424.162621 575.944798 423.409881 574.938143 422.658941 573.45247 423.663796 572.726742 422.432038 572.006416 421.439789 570.938533 420.658235 569.117909 418.929453 568.111253 418.252347 566.697613 417.577041 565.570303 417.170057 564.142257 416.885528 563.029353 416.629812 561.646327 416.658625 559.841911 416.8243 557.765571 417.335732 557.329774 415.862665 556.87957 414.328371 556.609448 413.186654 555.977362 411.140928 555.721646 408.644998 555.660418 406.32915 555.736052 405.155019 555.646012 403.561298 555.314662 402.104438 555.044539 400.82586 554.518701 399.622915 553.602087 397.877925 552.728691 396.104123 552.323508 393.849502 551.932731 392.525903 550.623539 390.301897 549.782558 388.706375 549.029817 386.75249 547.826873 385.234403 546.249359 383.925211 544.864532 383.114844 542.788192 382.810506 540.591198 382.536782 539.208172 382.551189 538.064655 382.489961 536.02073 382.459347 533.072795 383.384966 531.898664 382.976181 531.237765 381.730017 529.61343 380.377605 528.48612 379.648275 527.884647 378.659628 527.40383 376.894829 527.342602 375.193059 527.131907 373.156337 526.499821 371.573421 525.853328 370.525346 525.433738 369.021666 525.566998 366.815667 526.634882 363.88214 527.477663 362.0273 527.845029 360.030196 528.410485 358.621959 529.582816 357.224527 530.380577 356.295306 531.268379 355.216618 532.019319 354.272991 533.463572 352.693676 534.832192 351.478126 535.793827 350.487678 536.681629 349.576465 538.531066 347.707219 539.960913 346.444848 541.223284 345.241903 542.456842 343.920105 543.133949 342.857624 543.901096 341.656481 545.149061 340.044751 546.622128 338.598697 547.753039 338.861616 549.766351 337.718098 550.864848 337.237281 552.534203 336.545768 554.127925 336.034336 555.51095 335.68858 557.374794 335.614746 558.518312 335.598539 560.50281 336.124377 562.037104 336.666422 563.479557 337.312915 564.682501 338.125082 566.697613 340.199621 567.675456 341.447586 568.968441 343.477105 569.764401 344.319886 570.877305 344.499968 572.080249 344.514374 574.261036 342.726165 575.66027 340.876728 576.711946 339.598149 577.524113 338.695941 578.395708 337.613651 580.981678 334.952046 582.145004 333.813931 583.569449 332.517345 584.817414 331.388234 587.131461 329.403735 588.213751 328.681609 589.463517 328.049522 590.57462 327.689359 592.710386 326.787151 593.733249 326.171272 596.07791 324.049912 596.771224 323.149505 597.581591 322.32113 598.483799 321.435129 601.190424 319.538871 602.724718 318.757317 603.882643 318.065804 605.672653 317.149189 607.19074 315.82559 607.912867 314.847748 608.678213 313.826686 610.005414 312.315802 611.179545 311.851191 613.014575 312.106907 614.610098 312.814627 616.175006 313.17479 617.529219 313.189197 618.701549 312.258176 619.619965 309.96934 620.071969 308.465659 620.552787 305.847274 620.642828 304.372407 620.552787 301.393859 620.732869 300.145894 621.469402 299.047397 622.402224 298.280249 623.787051 297.030484 625.081837 296.279544 626.254167 295.465576 627.458913 294.714636 628.631243 293.675566 630.307802 292.04943 628.254873 290.63579 627.203197 290.169379 625.742736 290.079338 624.298482 289.719175 621.782744 289.128508 619.886486 289.126707 618.076666 289.285179 616.58199 288.734129 615.008078 288.577458 613.277494 288.813365 611.939489 289.285179 611.073297 288.339751 611.152533 286.529932 609.915373 285.582703 608.771855 284.829962 607.538297 284.015994 606.319145 283.340688 605.281876 282.904891 603.626927 282.406065 602.452795 282.362846 600.345842 282.542927 599.150101 282.57174 597.855315 283.304672 594.156441 283.304672 592.940891 283.061562 591.559665 283.009338 590.055985 282.632968 588.836833 281.970268 587.226904 281.413816 585.894301 280.707897 584.646337 280.376547 582.128797 278.88187 580.475649 278.566728 578.980973 277.936442 577.563731 276.600238 576.384197 275.341468 575.44057 273.452413 575.597241 271.485923 576.384197 269.517632 576.463433 267.866285 575.204663 267.315235 573.866658 266.764186 572.292746 265.820559 570.403691 264.954367 569.067486 264.482553 567.808716 265.033603 565.604519 266.213137 564.189078 267.158564 562.771837 266.920857 562.53593 263.931504 561.669738 262.516063 560.490204 260.862915 558.995527 260.234431 558.916292 258.660518 559.86172 256.850699 560.333533 254.569067 560.884582 252.600776 561.197924 250.713522 560.884582 248.903703 559.152198 248.745231 557.893429 248.745231 557.342379 247.722368 557.421615 245.048158 556.713895 242.923196 556.162845 241.42852 555.219218 239.854607 553.722741 238.91098 551.756251 237.888117 550.418246 237.965552 548.923569 238.91098 547.664799 237.808881 545.383167 237.178596 543.18077 236.786018 542.629721 235.763155 543.88849 233.796665 545.462403 233.245616 547.11375 232.300188 548.687662 230.728077 550.340811 229.231599 550.89186 227.185874 550.497481 225.534526 550.497481 222.307466 550.182339 220.576882 549.395383 219.318113 546.957079 218.531157 544.43954 218.374486 542.550485 218.374486 540.897337 219.318113 539.089318 219.318113 537.672077 217.823436 535.311208 216.170288 532.714433 214.990754 531.219757 214.834083 530.119459 215.62104 529.01736 216.32876 526.735727 216.013617 525.948771 217.193151 524.374859 218.059343 521.778084 219.00297 520.519314 221.127932 519.260544 222.78108 518.237681 223.960614 517.450725 225.534526 517.214818 223.016987 517.135583 221.599745 516.507098 219.633255 516.348626 218.138579 516.427862 216.564667 516.899676 215.383332 516.899676 213.81122 516.743005 212.473215 518.158445 211.055973 519.102073 208.61767 520.755221 208.223291 522.880182 207.751478 525.948771 206.807851 528.30964 206.65118 530.27613 205.628317 531.770806 204.367747 533.895768 202.008679 535.705587 200.985816 538.066455 199.962953 539.717803 199.411904 540.976572 199.727046 542.471249 199.411904 544.516975 198.94009 546.877843 198.624947 549.002805 198.624947 550.969295 198.860854 552.386536 198.860854 554.432262 198.309805 555.139983 197.207706 556.477988 195.71303 556.79133 194.533496 558.444478 192.565205 563.402122 192.565205 565.525283 191.464907 566.391475 190.598715 567.414338 188.788896 567.414338 184.06896 566.470711 182.572482 565.76299 181.236278 564.345749 180.526757 561.907445 180.526757 560.726111 180.134179 559.546577 179.819036 558.0519 179.819036 556.713895 179.503894 554.904076 179.190552 553.486834 179.426459 552.463971 178.403596 550.654152 177.06559 548.295085 177.931782 547.192986 176.278634 546.090887 175.963491 544.675447 176.042727 542.629721 177.06559 537.98722 177.06559 535.783022 176.908919 534.367581 177.301497 532.95034 177.380733 532.006713 178.167689 530.98385 178.639502 529.489174 178.088453 527.679354 177.06559 526.499821 177.06559 524.690001 177.144826 523.351996 177.61664 520.834457 177.61664 519.811594 177.06559 516.899676 176.121963 513.987758 175.727585 511.785361 175.80682 509.424493 175.648349 507.537238 174.861393 504.940463 174.153672 502.579595 172.974138 501.084918 172.738232 499.275099 173.602623 498.644814 174.861393 498.72405 176.121963 499.667677 178.245124 500.377198 180.449322 501.713403 181.628855 502.658831 182.966861 502.736266 184.540773 503.208079 186.271356 503.366551 189.655088 501.477496 190.598715 500.849012 191.700814 498.644814 191.700814 497.070902 191.306435 495.340318 191.070528 492.507636 190.677951 490.30524 189.811759 488.416185 188.947368 487.000744 189.183274 485.662739 189.419181 485.032453 190.598715 485.426832 192.408534 485.741974 194.769403 486.213788 196.184843 484.875782 197.366178 483.617013 198.545712 481.176908 199.096761 478.502698 200.19886 477.085457 200.591437 475.039731 200.591437 472.286285 200.276295 468.981789 199.253432 465.126244 198.860854 463.788239 199.096761 461.349935 200.040388 458.596489 201.457629 456.548962 203.031542 453.480373 207.515571 453.087796 209.404626 452.45751 210.978538 451.513883 212.001401 450.33435 213.496078 450.019207 215.305897 448.052717 215.462568 446.55624 215.934381 443.646123 217.351623 440.183155 219.633255 437.273038 222.071559 435.61989 223.881378 433.181587 226.163011 432.236159 227.344345 430.348905 229.231599 428.223943 230.018556 426.098981 231.515033 427.280316 234.42515 427.9088 235.606485 427.436987 236.786018 426.49336 236.155733 425.23459 236.942689 425.470497 240.090514 425.391261 241.821097 423.581442 241.979569 422.558579 240.87747 421.220573 237.729645 419.725897 236.550112 418.151984 236.550112 415.634445 238.044788 413.588719 239.303558 412.645092 240.720799 411.858136 241.58519 410.756037 242.372147 409.182125 243.866823 408.317734 245.440735 408.159262 247.250554 407.058964 247.722368 406.272008 249.217044 405.731763 251.442852 404.438778 253.232862 404.141644 255.022872 404.539624 256.712037 404.539624 258.800982 405.333783 260.093967 404.935803 261.286107 404.539624 262.480047 404.240688 264.169212 403.842708 265.363152 402.848658 266.157311 402.450678 267.947321 402.450678 269.737332 401.755564 271.030317 401.555673 273.814377 401.654718 275.006516 401.654718 276.497591 400.959604 278.784626 400.363534 279.778676 398.771613 281.667731 398.175544 283.059761 397.876608 284.550836 398.274588 285.645731 397.876608 287.433941 397.678519 288.627881 397.579474 290.318846 398.175544 291.610031 398.175544 293.698976 397.480429 295.289096 397.082449 296.980061 396.286489 298.471136 395.789464 299.962211 395.094349 301.752221 395.591374 303.839365 393.801364 304.635326 392.807314 305.629376 392.310289 306.823316 391.514329 308.314391 391.316239 310.003555 390.023254 311.29654 388.134199 312.29059 386.542279 313.68262 385.152049 314.577625 383.859064 316.0687 382.964059 317.161795 382.566079 318.654671 380.975959 321.139795 379.881064 322.531825 378.290944 323.923855 376.2038 324.917905 374.213899 325.713865 371.132704 325.911955 369.24365 326.309935 367.752575 326.906005 366.45959 327.40303 364.271599 328.79506 362.879569 329.690065 361.984564 330.486025 360.990514 331.878055 360.69338 333.36913 360.394445 335.854255 359.798375 336.947349 359.202305 338.73736 358.406345 340.228434 357.457315 342.212933 357.080945 343.619369 354.923569 344.183024 353.517132 344.838521 352.391623 346.527685 352.017053 347.653195 349.672392 349.434201 348.546883 350.842438 346.670433 352.248875 345.357639 353.561669 343.762117 356.469985 342.825693 358.533719 342.542965 359.659228 343.293905 360.595652 343.951203 365.567702 344.606699 366.693212 345.357639 367.725079 345.919493 369.3188 347.515016 370.912521 348.82781 370.537952 349.672392 371.476177 350.891544 371.944388 352.485265 371.288892 352.955278 372.882613 353.891702 373.539911 356.14272 373.539911 357.925527 372.788971 360.363831 371.663461 361.48934 370.44431 362.24028 368.944231 365.146795 368.756946 366.178662 367.818721 367.680542 367.535993 369.837918 366.974139 370.587058 368.474218 369.555191 370.725237 370.30613 371.850746 371.43164 371.850746 373.495374 371.663461 375.933677 372.414401 377.527399 372.038031 379.029278 372.882613 379.778417 374.571778 379.310205 376.071856 378.465623 377.665578 377.810127 378.88653 377.810127 380.386609 378.091054 382.73127 378.935636 384.60772 379.310205 386.482368 381.467582 386.482368 381.654867 387.70152 382.593091 389.952539 384.09317 390.984406 385.21868 390.984406 385.21868 392.579928 384.750468 394.080007 384.937752 396.237383 385.405964 398.301117 387.001486 399.613911 388.969777 401.771288 389.06522 402.990439 387.563341 403.458651 384.84411 403.835022 382.312164 403.835022 378.465623 403.458651 376.77826 403.177724 375.370022 402.709512 374.057228 402.522227 371.806209 402.896797 369.931561 402.709512 368.055112 402.239499 366.272305 401.958572 364.865868 401.49036 362.333922 401.396718 360.082904 399.988481 358.957394 400.082123 356.800018 400.645778 356.14272 402.145857 353.985344 401.301275 351.923411 401.677645 350.891544 402.803155 350.421531 404.773246 350.515173 406.273325 351.078828 408.337059 350.234246 409.556211 349.483306 411.430859 349.483306 412.839097 349.57875 415.558327 349.859677 417.528419 349.859677 419.028498 349.483306 420.434934 349.953319 422.968681 351.923411 424.656045 353.704417 425.594269 355.674508 425.406985 356.706375 425.875196 357.831885 426.532494 359.144679 427.000706 360.176546 426.438852 361.676625 426.532494 364.491299 426.532494 366.555033 426.062481 369.180621 425.2197 370.30613 424.46876 371.899852 424.187833 373.119003 424.187833 375.27638 423.624178 376.77826 422.217741 377.714683 421.373159 379.403848 421.936814 381.280297 422.498668 381.935794 423.436893 383.437673 425.032415 384.750468 425.687912 385.499607 427.000706 383.999528 429.06444 384.09317 430.659962 384.563183 431.785471 384.563183 434.972914 385.499607 436.192066 387.469698 436.849363 387.469698 439.00674 387.095129 441.257758 386.344189 443.22785 386.531474 445.759796 386.531474 447.353517 386.437831 449.042682 385.031395 449.887264 383.905885 452.042839 382.405806 452.41921 380.997569 452.981064 380.24843 453.919289 379.684775 455.419368 379.403848 456.544877 377.246471 456.357592 375.27638 455.983023 373.682659 455.702096 370.212488 455.702096 368.336039 456.076665 366.742317 456.544877 364.584941 457.202174 363.740359 458.327684 361.86391 459.73412 361.48934 461.704212 362.333922 463.580661 362.989419 465.174383 362.427565 466.957189 360.927486 466.112607 359.331964 466.20625 357.925527 465.361667 356.800018 464.799813 355.768151 465.738038 354.548999 465.174383 354.174429 464.048873 350.797901 463.861588 349.483306 465.08074 348.170512 466.018965 346.95136 468.176341 346.857718 469.957347 347.327731 471.365585 348.264155 472.114724 346.857718 473.710246 345.919493 475.02304 343.48119 475.491252 341.981111 477.461343 340.668317 478.86778 339.917377 480.276017 338.88551 481.963381 337.947285 484.2144 337.947285 485.808121 338.698225 487.122716 340.479231 486.465418 341.511098 485.997207 341.323814 488.154583 341.136529 489.373735 341.323814 491.531111 339.072795 492.750263 338.417298 494.812196 338.228213 497.2523 338.228213 498.939664 337.666358 501.003398 337.666358 503.254417 337.947285 505.411793 338.228213 507.756454 339.166437 508.881964 339.823735 510.007473 340.479231 511.694837 340.949244 513.196716 342.074753 514.039498 344.044845 514.039498 345.263997 513.664928 345.451282 516.103232 345.825851 517.322384 346.576791 518.917906 347.327731 521.075282 347.889585 523.513586 349.389664 523.888155 350.797901 521.168925 350.891544 519.47976 350.985186 517.511469 351.54704 516.38596 353.236205 515.541378 354.736284 515.071365 356.14272 514.322226 357.080945 513.103074 359.519248 513.196716 361.582982 512.913989 363.272147 512.071207 364.397656 512.258492 365.804093 514.696795 366.648675 516.196874 367.774184 516.38596 370.212488 517.135099 372.463507 517.698754 373.776301 518.354251 375.933677 518.824263 377.152829 518.073324 378.278338 518.917906 379.49749 519.386118 380.810284 518.541535 381.935794 517.886039 382.593091 515.915947 382.780376 514.603153 383.905885 513.009432 385.405964 512.164849 386.250547 510.945698 388.220638 509.726546 389.908002 508.975606 390.939869 507.850097 391.878093 505.505436 392.816318 503.348059 393.378172 501.565252 393.6609 500.065173 395.348264 500.628828 396.380131 502.690762 397.786567 502.786205 399.288447 503.160774 401.256738 503.911714 402.85226 502.503477 404.915994 502.879847 406.509715 503.628986 408.103437 504.286284 409.792601 504.94178 411.199038 505.69272 412.605474 505.69272 413.730984 505.318151 415.045579 504.94178 416.826585 503.722629 418.045736 501.84798 419.077603 500.722471 420.015828 499.596961 421.609549 499.596961 421.609549 500.816113 422.454132 502.97349 424.424223 503.160774 426.017944 502.316192 427.426182 502.503477 427.894394 504.94178 428.551691 506.537303 429.958128 506.81823 431.928219 506.350018 432.960086 505.411793 434.085596 504.005357 434.928377 503.067132 434.928377 501.09704 434.834735 499.409677 433.521941 498.37781 432.115504 497.345943 432.115504 496.033149 433.990153 496.407718 436.430257 496.220433 437.743051 494.907639 438.774918 496.407718 439.713143 497.158658 441.025937 497.907797 442.7133 498.658737 443.932452 497.720512 444.964319 496.688645 445.057962 494.812196 444.683392 493.312117 443.83881 491.812038 443.46424 489.561019 445.057962 490.216516 447.121696 490.405602 447.496265 492.28025 448.621775 494.907639 449.747284 497.158658 449.840926 498.658737 450.966436 498.939664 452.187388 499.690604 453.874752 499.690604 455.563916 498.001439 455.374831 496.033149 455.563916 494.531269 456.970353 493.875772 458.283147 492.937548 459.034087 491.435668 460.534166 491.812038 462.127887 492.186608 463.159754 491.342025 463.442482 489.184649 463.442482 487.68457 465.223488 487.216358 467.287222 487.403643 468.600016 487.029074 470.851035 487.029074 472.163829 487.310001 473.102054 488.248225 471.131962 488.997364 469.819168 489.654662 468.319089 490.405602 469.538241 491.342025 468.693659 492.186608 468.693659 493.686687 469.163671 495.188566 468.038162 496.969572 468.131804 498.846022 469.725526 500.722471 470.570108 501.47161 472.257472 501.47161 473.476623 503.348059 475.072145 504.286284 476.38494 504.848138 478.542316 504.754496 479.386898 503.911714 479.667825 506.44366 480.136037 507.943739 481.544275 508.975606 483.044353 510.007473 484.82716 510.852055 486.420882 510.569327 486.982736 512.539419 487.359106 513.945856 488.859185 515.165007 490.922919 515.915947 493.080296 516.196874 494.185996 517.288168 493.672764 519.344699 493.672764 522.017108 494.08335 525.20275 494.08335 526.744248 494.801875 529.416657 495.007168 530.855508 495.932787 532.397006 496.961052 533.014686 498.605196 532.910238 500.764373 531.163448 502.305871 529.827243 504.052661 529.314011 505.080927 530.547569 505.273614 532.143091 507.524633 534.39411 508.931069 535.330534 510.243863 535.706904 512.120313 535.706904 513.245822 535.519619 514.464974 535.424176 515.120471 532.517661 515.403198 531.111224 516.528708 530.266642 518.590641 529.702987 520.279806 529.234775 521.779884 529.985715 523.092679 530.641212 524.969128 530.641212 526.375564 530.079357 528.720225 529.609345 529.941178 529.609345 531.066687 529.328417 532.192197 529.515702 533.411349 531.298509 534.911428 531.485794 536.881519 531.298509 538.756168 530.828496 540.538974 530.079357 541.758126 528.953848 542.509066 527.077399 542.226338 525.858247 541.758126 524.639095 541.007186 523.139016 544.19643 522.575361 545.321939 521.449852 547.198388 521.168925 548.604825 522.669003 548.79211 524.920022 549.16848 526.983756 550.387632 527.171041 553.294147 527.451968 555.451524 527.828338 558.828052 527.828338 559.672634 526.515544 560.047203 525.013665 562.017295 525.107307 562.95552 524.45181 564.549241 522.200792 565.581108 520.98164 567.5512 520.98164 568.583067 521.824421 569.895861 521.824421 572.521449 521.730779 574.491541 521.449852 576.742559 519.762488 578.055354 519.011548 579.557233 518.541535 581.057312 519.762488 582.463749 522.013507 583.495616 522.856288 584.995695 523.607228 586.497574 524.358168 588.091296 524.358168 589.216805 525.483677 589.497732 527.358326 590.812327 528.577477 591.842393 529.234775 592.967903 531.673079 593.156988 532.89223 593.812485 534.205024 594.937994 534.955964 597.46994 534.298667 599.065462 533.549528 601.035554 532.798588 601.784693 531.766721 602.348348 530.360284 604.31844 531.392151 606.944028 533.830455 609.054583 535.850969 611.728794 537.347447 615.506903 537.347447 618.339585 537.504118 620.070169 536.717161 620.698653 535.222485 621.721516 532.62571 622.902851 531.602847 624.397527 530.895126 625.499626 530.344077 626.286582 529.321214 627.309445 526.960346 628.64565 524.048428 628.960792 522.632987 629.196699 520.823168 629.196699 518.856678 629.119264 516.731716 629.275935 514.134941 630.770611 512.876171 632.187853 511.853308 632.973008 510.594539 634.075107 510.20016 635.09797 510.673775 636.279305 511.302259 639.268658 511.932544 642.10134 512.796936 643.360109 512.955407 644.618879 513.583892 644.698115 515.23704 643.831923 519.485162 645.013257 521.059075 647.058983 522.632987 648.710331 523.104801 650.363479 523.419943 650.284243 524.678713 649.340616 525.937483 649.733194 528.139879 650.991963 530.264841 652.250733 532.310567 653.824645 534.04115 655.241887 534.671436 655.398558 536.637925 656.26475 538.447745 656.97247 540.416035 658.23124 541.910712 659.725916 542.775103 661.614971 543.01101 663.266318 543.326152 664.68356 542.854339 667.121863 541.359662 668.144726 540.3368 670.269688 540.887849 671.449222 542.933575 671.528458 544.113109 671.371787 546.317306 672.079507 547.968654 673.968562 549.306659 675.227332 549.621802 676.563536 550.880571 676.878679 552.531919 676.878679 554.656881 677.114586 556.310029 678.688498 556.781842 679.947268 557.017749 681.679652 557.017749 683.251763 556.781842 684.510533 556.310029 686.084445 556.072321 688.52455 557.017749 688.917127 555.523073 689.547413 554.105831 690.019226 552.531919 690.49104 550.329522 691.121325 548.834846 691.434667 546.709884 692.45753 544.820829 693.167051 543.484624 694.110678 541.75224 693.323722 540.3368 692.851908 538.919558 692.45753 537.660788 692.221623 536.402019 690.885418 535.222485 689.626649 534.356293 687.422451 533.33343 686.871402 531.208468 686.320352 529.872263 685.848539 527.983209 685.140818 525.780812 685.533396 523.65585 686.00701 521.215746 686.320352 518.777442 686.950637 517.360201 687.816829 516.337338 688.760457 515.708853 689.153034 513.899034 690.019226 512.245886 691.593139 510.909681 692.144188 509.807583 692.221623 508.390341 692.45753 507.131572 693.323722 504.378125 694.503256 502.411635 696.077168 500.286674 698.20213 498.397619 699.696806 497.925805 700.955576 497.218085 700.642234 495.880079 700.798905 494.542074 701.114048 492.890726 701.506625 490.845001 701.506625 488.955946 701.114048 487.540505 700.825917 485.058982"></polyline>
		)
	}
}
