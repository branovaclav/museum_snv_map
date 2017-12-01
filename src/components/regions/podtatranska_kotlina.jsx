import React from 'react'

export default class extends React.Component {
	render() {
		return (
		<path ref="elem" onClick={ this.props.onClick } className={ this.props.active ? 'active' : '' }
		d="M285.925341,225.493107 L287.416416,225.692998 L289.406317,224.797993 L291.394416,223.604053 L293.481561,222.311067 L295.469661,220.522858 L297.358716,218.532957 L298.453611,216.843793 L298.651701,215.750698 L300.342666,215.649853 L302.231721,215.948788 L303.524706,216.544858 L305.512806,216.942838 L307.898886,216.247723 L309.588051,216.247723 L312.372111,214.754848 L314.261166,213.960688 L315.952131,213.463663 L316.748091,211.972588 L317.344161,211.772698 L318.93428,212.269723 L321.817385,211.574608 L324.801336,210.580558 L325.696341,209.287573 L326.292411,209.087683 L327.187416,209.287573 L328.082421,209.485663 L329.27456,209.287573 L330.86468,208.392568 L333.351605,207.596608 L335.537795,206.802448 L337.42685,206.503513 L338.4209,205.907443 L339.01877,205.210528 L339.81293,205.509463 L341.305805,205.410418 L342.59699,204.196669 L344.98307,202.606549 L346.276055,202.307614 L348.56309,200.717495 L348.662135,199.125574 L348.066065,198.032479 L346.674035,196.341514 L346.674035,195.347464 L347.17106,194.65235 L348.96107,194.65235 L350.15321,194.65235 L351.147259,194.05628 L351.147259,193.06223 L350.55119,191.470309 L350.55119,189.680299 L351.54524,188.88614 L352.73918,189.282319 L354.628235,189.979235 L357.014315,189.08423 L358.604434,188.48816 L359.798375,187.294219 L360.990514,186.30017 L361.885519,185.902189 L362.382544,185.207075 L362.481589,184.11398 L363.576485,183.019085 L364.370644,180.732049 L365.762674,178.74395 L366.758525,177.55181 L367.25555,176.854895 L368.2496,176.35787 L368.944714,176.058935 L369.839719,174.866795 L369.740674,173.17583 L369.540784,171.486665 L369.938764,170.39177 L370.932814,170.292725 L372.324844,170.98964 L373.617829,172.280825 L376.003909,174.070835 L377.892964,175.36382 L380.080954,176.058935 L380.975959,175.95989 L380.975959,174.96584 L381.770119,174.16988 L382.267144,174.56786 L382.964059,176.258825 L383.859064,178.54586 L384.156199,180.53396 L385.748119,182.124079 L387.736219,182.224925 L388.631224,182.423015 L388.730269,182.224925 L389.227294,181.428965 L388.829314,180.13598 L389.029204,178.446815 L389.823363,177.252875 L391.215394,177.35192 L391.912309,177.947989 L392.011354,179.440865 L393.005404,180.633005 L393.702319,181.32992 L394.993503,182.32397 L394.993503,183.019085 L394.993503,184.213025 L396.187444,185.902189 L397.977454,187.294219 L398.274588,187.791244 L398.474479,189.183274 L400.264489,189.979235 L401.854609,189.979235 L403.644619,189.183274 L405.533674,187.991135 L407.222838,187.991135 L408.317734,187.991135 L408.713913,189.08423 L409.410828,190.575304 L409.515276,191.601769 L408.505018,192.208644 L406.687996,193.92482 L405.778585,194.834232 L405.375202,196.550409 L405.375202,198.266585 L406.082922,199.881916 L408.55364,200.985816 L409.261361,201.378394 L411.227851,201.535065 L412.409185,201.535065 L413.667955,200.591437 L414.060533,199.332668 L413.903862,198.781618 L414.454911,198.309805 L415.634445,198.309805 L417.680171,198.309805 L419.882568,197.67952 L421.850859,196.735893 L422.479343,195.633794 L422.558579,194.45426 L423.502206,193.982446 L424.525069,193.982446 L425.155354,193.982446 L425.706403,193.19549 L426.257453,192.802913 L427.436987,192.093391 L428.144707,191.229 L429.639383,190.757187 L431.056625,190.442044 L431.685109,188.947368 L432.315395,188.00194 L433.181587,188.081176 L433.730835,188.788896 L433.968543,190.362808 L433.494928,191.229 L434.517791,193.510633 L436.014269,195.633794 L437.824088,197.758755 L439.554671,199.804481 L441.757068,202.244586 L443.646123,204.526218 L445.140799,205.077268 L447.894245,205.549081 L449.704064,206.65118 L451.829026,208.223291 L453.087796,209.404626 L453.244467,210.191582 L452.45751,210.978538 L451.513883,212.001401 L450.33435,213.496078 L450.885399,214.439705 L450.019207,215.305897 L448.052717,215.462568 L446.55624,215.934381 L443.646123,217.351623 L440.183155,219.633255 L437.273038,222.071559 L435.61989,223.881378 L433.181587,226.163011 L432.236159,227.344345 L430.348905,229.231599 L428.223943,230.018556 L426.098981,231.515033 L426.178217,232.45866 L427.280316,234.42515 L427.9088,235.606485 L427.9088,236.550112 L427.436987,236.786018 L426.49336,236.155733 L425.706403,236.078298 L425.23459,236.942689 L424.919447,237.965552 L425.470497,240.090514 L425.547932,240.956706 L425.391261,241.821097 L424.447634,242.057004 L423.581442,241.979569 L422.558579,240.87747 L421.220573,237.729645 L419.725897,236.550112 L418.151984,236.550112 L415.634445,238.044788 L413.588719,239.303558 L412.645092,240.720799 L411.858136,241.58519 L410.756037,242.372147 L409.182125,243.866823 L408.317734,245.440735 L408.159262,247.250554 L407.058964,247.722368 L406.272008,249.217044 L405.956865,250.319143 L405.731763,251.442852 L405.234738,252.238812 L404.438778,253.232862 L404.042599,254.028822 L404.141644,255.022872 L404.539624,256.712037 L404.539624,258.800982 L404.638669,259.496097 L405.333783,260.093967 L405.731763,260.093967 L405.731763,260.789082 L404.935803,261.286107 L404.539624,262.480047 L404.240688,264.169212 L403.842708,265.363152 L402.848658,266.157311 L402.450678,267.947321 L402.450678,268.941371 L402.450678,269.737332 L401.755564,271.030317 L401.654718,272.123411 L401.555673,273.814377 L401.654718,275.006516 L401.654718,276.497591 L400.959604,278.784626 L400.363534,279.778676 L398.771613,281.667731 L398.175544,283.059761 L397.876608,284.550836 L398.274588,285.645731 L398.474479,286.439891 L397.876608,287.433941 L397.678519,288.627881 L397.579474,290.318846 L398.175544,291.610031 L398.274588,292.505036 L398.175544,293.698976 L397.480429,295.289096 L397.082449,296.980061 L396.286489,298.471136 L395.789464,299.962211 L395.094349,301.752221 L395.094349,302.845316 L395.591374,303.839365 L393.801364,304.635326 L392.807314,305.629376 L392.310289,306.823316 L391.514329,308.314391 L391.116349,309.10855 L391.316239,310.003555 L390.718369,310.700471 L390.023254,311.29654 L389.029204,311.793565 L388.134199,312.29059 L386.542279,313.68262 L385.152049,314.577625 L383.859064,316.0687 L382.964059,317.161795 L382.566079,318.157646 L382.566079,318.654671 L381.870964,319.349785 L380.975959,321.139795 L379.881064,322.531825 L378.290944,323.923855 L376.2038,324.917905 L374.213899,325.713865 L371.132704,325.911955 L369.24365,326.309935 L367.752575,326.906005 L366.45959,327.40303 L364.271599,328.79506 L362.879569,329.690065 L361.984564,330.486025 L360.990514,331.878055 L360.69338,333.36913 L360.394445,335.854255 L359.798375,336.947349 L359.202305,338.73736 L358.406345,340.228434 L357.457315,342.212933 L357.080945,343.619369 L356.236363,343.619369 L354.923569,344.183024 L353.517132,344.838521 L352.391623,346.527685 L352.017053,347.653195 L351.359756,348.215049 L349.672392,349.434201 L348.546883,350.842438 L346.670433,352.248875 L345.357639,353.561669 L343.762117,356.469985 L342.825693,358.533719 L342.542965,359.659228 L343.293905,360.595652 L343.951203,361.440234 L343.951203,363.878538 L343.951203,365.567702 L344.235731,366.055723 L344.606699,366.693212 L345.357639,367.725079 L345.919493,369.3188 L346.106778,370.44431 L347.515016,370.912521 L348.07687,370.631594 L348.82781,370.537952 L349.672392,371.476177 L350.046961,371.757104 L350.891544,371.944388 L351.640683,371.569819 L352.485265,371.288892 L352.859835,372.038031 L352.955278,372.882613 L353.891702,373.539911 L356.14272,373.539911 L357.925527,372.788971 L360.363831,371.663461 L361.48934,370.44431 L361.582982,369.506085 L362.24028,368.944231 L363.272147,369.3188 L365.146795,368.756946 L366.178662,367.818721 L367.680542,367.535993 L368.429681,366.974139 L369.837918,366.974139 L370.118846,368.006006 L370.587058,368.474218 L369.931561,369.3188 L369.555191,370.725237 L370.30613,371.850746 L371.43164,371.850746 L373.495374,371.663461 L374.244513,372.227116 L375.933677,372.414401 L376.684617,371.944388 L377.527399,372.038031 L377.714683,372.414401 L378.559266,372.414401 L379.029278,372.882613 L379.778417,373.633553 L379.778417,374.571778 L379.310205,376.071856 L378.465623,377.665578 L377.810127,378.88653 L377.810127,380.386609 L378.091054,382.73127 L378.935636,384.60772 L379.310205,386.482368 L380.435715,386.482368 L381.467582,386.482368 L381.654867,387.70152 L381.654867,388.546102 L382.593091,389.952539 L384.09317,390.984406 L385.21868,390.984406 L385.593249,391.548061 L385.21868,392.579928 L384.750468,394.080007 L384.937752,396.237383 L385.405964,398.301117 L387.001486,399.613911 L387.750625,400.364851 L388.969777,401.771288 L389.06522,402.990439 L388.962574,403.022854 L387.563341,403.458651 L384.84411,403.835022 L382.312164,403.835022 L378.465623,403.458651 L376.77826,403.177724 L375.370022,402.709512 L374.057228,402.522227 L373.025361,402.896797 L371.806209,402.896797 L369.931561,402.709512 L368.055112,402.239499 L366.272305,401.958572 L364.865868,401.49036 L362.333922,401.396718 L361.582982,400.739421 L360.082904,399.988481 L358.957394,400.082123 L356.800018,400.645778 L356.14272,402.145857 L355.393581,402.239499 L353.985344,401.301275 L351.923411,401.677645 L350.891544,402.803155 L350.421531,404.773246 L350.515173,406.273325 L350.891544,407.305192 L351.078828,408.337059 L350.234246,409.556211 L349.483306,411.430859 L349.483306,412.839097 L349.57875,415.558327 L349.859677,417.528419 L349.859677,419.028498 L349.483306,420.434934 L349.483306,421.466801 L349.953319,422.968681 L350.891544,423.530535 L351.923411,424.656045 L353.704417,425.594269 L354.736284,425.594269 L355.674508,425.406985 L356.706375,425.875196 L357.831885,426.532494 L359.144679,427.000706 L360.176546,426.438852 L361.676625,426.532494 L362.614849,426.719779 L364.491299,426.532494 L366.555033,426.062481 L369.180621,425.2197 L370.30613,424.46876 L371.899852,424.187833 L373.119003,424.187833 L375.27638,423.624178 L376.77826,422.217741 L377.714683,421.373159 L379.403848,421.936814 L380.061145,422.498668 L381.280297,422.498668 L381.935794,423.436893 L383.437673,425.032415 L384.750468,425.687912 L385.499607,427.000706 L384.750468,427.751646 L383.999528,429.06444 L384.09317,430.659962 L384.563183,431.785471 L384.563183,433.004623 L384.563183,434.034689 L384.563183,434.972914 L385.499607,436.192066 L386.250547,436.849363 L387.469698,436.849363 L387.939711,437.600303 L387.469698,439.00674 L387.095129,441.257758 L386.344189,443.22785 L386.531474,445.759796 L386.531474,447.353517 L386.437831,449.042682 L385.031395,449.887264 L383.905885,452.042839 L382.405806,452.41921 L380.997569,452.981064 L380.24843,453.919289 L379.684775,455.419368 L379.403848,456.544877 L377.246471,456.357592 L375.27638,455.983023 L373.682659,455.702096 L372.276222,455.702096 L370.212488,455.702096 L368.336039,456.076665 L366.742317,456.544877 L364.584941,457.202174 L363.740359,458.327684 L361.86391,459.73412 L361.48934,460.578703 L361.48934,461.704212 L362.052995,462.642437 L362.333922,463.580661 L362.989419,465.174383 L363.365789,466.20625 L362.427565,466.957189 L360.927486,466.112607 L360.082904,465.83168 L359.331964,466.20625 L357.925527,465.361667 L356.800018,464.799813 L355.768151,465.738038 L354.923569,465.83168 L354.548999,465.174383 L354.174429,464.048873 L353.517132,463.861588 L350.797901,463.861588 L349.483306,465.08074 L348.170512,466.018965 L347.7023,466.863547 L346.95136,468.176341 L346.857718,468.644553 L346.857718,469.957347 L347.327731,471.365585 L348.264155,472.114724 L348.07687,472.772021 L346.857718,473.710246 L346.389506,474.553027 L345.919493,475.02304 L345.076712,474.64847 L343.48119,475.491252 L341.981111,477.461343 L340.668317,478.86778 L339.917377,480.276017 L338.88551,481.963381 L337.947285,484.2144 L337.947285,485.808121 L338.698225,487.122716 L339.63645,487.029074 L340.479231,486.465418 L341.511098,485.997207 L341.700184,486.090849 L341.793826,486.93363 L341.323814,488.154583 L341.136529,489.373735 L341.417456,490.310158 L341.323814,491.531111 L340.385589,492.092965 L339.072795,492.750263 L338.417298,494.812196 L338.228213,497.2523 L338.228213,498.939664 L337.666358,501.003398 L337.666358,503.254417 L337.756399,503.944129 L336.353564,504.882354 L335.134412,505.818777 L334.291631,506.66336 L333.353406,508.446166 L332.508824,509.665318 L332.508824,511.539967 L332.508824,513.041846 L332.883394,514.916495 L332.883394,517.918453 L332.789751,519.513976 L332.789751,521.014054 L332.789751,522.79506 L331.851527,524.67151 L331.383315,527.860753 L331.383315,529.079905 L331.570599,530.01813 L332.696109,531.330924 L333.447049,532.643718 L334.291631,534.332882 L335.604425,535.458392 L337.010862,536.301173 L337.761801,536.958471 L338.700026,537.426682 L340.01282,537.615768 L341.325614,537.803053 L342.638409,538.552192 L343.85756,539.773144 L345.170354,541.55415 L346.202221,543.149673 L346.295864,544.275182 L345.640367,545.775261 L344.6085,546.526201 L342.170197,546.526201 L340.574675,545.868903 L338.604583,545.494334 L337.104504,545.400691 L335.885352,544.368824 L335.134412,543.524242 L334.197989,543.149673 L332.321539,542.67966 L330.632375,542.67966 L329.695951,543.243315 L328.100429,543.805169 L327.349489,543.992454 L325.287556,543.992454 L323.879319,543.524242 L322.472882,542.773302 L320.596433,542.398733 L318.5345,542.117806 L315.90711,542.024163 L313.749734,541.741435 L312.249655,541.835078 L311.498715,542.117806 L311.124146,542.398733 L311.030503,543.243315 L311.030503,543.524242 L310.936861,544.275182 L309.904994,545.024321 L308.21763,545.400691 L306.622108,545.962546 L304.558374,545.962546 L303.526507,545.775261 L302.871011,545.305248 L302.400998,544.837036 L300.994561,544.837036 L300.056337,544.837036 L299.307198,544.556109 L297.805318,543.992454 L295.086087,543.711527 L293.396923,543.711527 L291.428632,543.805169 L289.083971,543.898812 L288.145746,543.149673 L286.456582,542.773302 L285.611999,542.773302 L282.845948,542.697668 L283.505046,541.793659 L283.832794,540.723975 L284.328018,539.737128 L284.655767,538.255057 L284.162343,536.938662 L281.695227,534.552582 L278.813923,532.415014 L271.410772,527.066594 L267.461585,525.256775 L262.030327,523.200244 L256.764744,521.307587 L252.075421,519.661642 L247.632811,518.098535 L243.847498,516.782139 L237.924617,515.055158 L233.235295,513.49205 L228.299261,512.256691 L223.773813,511.433719 L220.728635,511.10597 L218.837779,511.10597 L217.60242,511.846105 L216.451699,512.092817 L215.628726,511.68043 L214.805754,510.859259 L212.666386,509.213314 L209.623008,508.060792 L205.837695,507.320657 L202.464769,507.403495 L201.312247,507.896918 L200.161526,508.307504 L198.926167,507.979755 L197.528735,506.991108 L194.072971,506.087099 L190.946756,506.087099 L189.054099,505.510838 L187.654866,504.523991 L184.528651,504.111605 L183.37793,504.85174 L183.295093,506.168135 L183.624642,507.567369 L183.871354,508.637053 L183.788516,510.036286 L182.225409,510.529709 L180.332752,510.529709 L179.180231,510.364034 L177.782798,508.637053 L178.02951,506.744396 L178.605771,505.264126 L178.605771,503.041921 L178.686807,501.232102 L177.453249,499.834669 L175.396718,498.846022 L172.681089,497.282914 L169.144288,495.309221 L165.769561,493.580439 L164.04258,492.017331 L161.986049,491.030484 L160.347307,490.801781 L158.447447,490.537061 L157.131052,489.467377 L155.650782,488.150981 L154.581097,486.670711 L152.524567,484.941929 L150.63191,483.791208 L149.232677,483.13211 L147.835244,482.309137 L147.176146,481.158417 L146.929434,479.759183 L147.095109,478.196076 L148.492542,476.386257 L148.658217,474.740312 L148.492542,473.094367 L147.835244,471.450223 L145.85975,469.474729 L143.556508,468.24117 L140.759842,467.418198 L137.961376,466.595226 L134.012188,465.855091 L130.639262,464.868244 L127.923633,463.879597 L124.386832,463.79856 L122.08359,464.126308 L120.520482,464.126308 L118.381114,463.551848 L115.995034,462.482164 L112.949856,459.273112 L111.799135,456.310771 L111.222874,454.500952 L108.67292,451.2919 L106.863101,450.222215 L104.147472,448.082847 L100.444997,445.286181 L97.07207,443.723074 L95.5089626,442.406678 L93.8630177,440.514022 L91.8893244,439.116589 L90.4072536,438.374653 L87.9401371,438.868077 L85.6350939,439.937761 L85.1416705,440.843571 L85.1416705,442.65339 L86.7876155,445.532893 L89.0080204,448.578071 L91.8893244,451.2919 L94.8498643,454.090366 L97.6483308,456.804194 L100.362159,458.614013 L102.994951,460.013247 L104.80477,461.493517 L106.450715,463.79856 L107.603236,465.855091 L107.849948,467.418198 L107.356525,468.405045 L106.367877,469.804278 L104.723733,470.62725 L102.41869,471.20171 L99.1286008,471.614097 L95.9195484,471.20171 L94.1097293,471.367385 L93.2057202,471.943646 L91.4769378,472.518106 L89.1736954,472.600944 L86.2113547,471.777971 L83.9081123,471.696934 L82.5917165,471.367385 L81.6859065,470.05099 L79.3826641,469.064143 L76.1736118,468.075495 L72.8835227,466.924775 L69.0982096,465.855091 L66.2187064,464.949281 L63.0924915,463.632885 L60.7892491,463.469011 L58.4031692,463.222299 L57.9511647,462.997197 L57.967372,462.973787 L57.8737296,462.786502 L57.2560501,462.447949 L56.8616716,462.073379 L56.7860373,461.923911 L56.692395,461.322439 L56.7302121,459.820559 L56.5429273,458.244846 L56.5609355,458.021545 L56.1845651,456.294564 L56.2223822,456.218929 L55.9972804,455.693091 L56.0170893,455.617457 L55.4354261,454.85031 L55.13469,454.661224 L54.1784572,454.491948 L53.6706274,454.117378 L52.7522117,452.764966 L52.1327313,451.416156 L52.0949142,451.189253 L51.8698124,450.814684 L51.9076295,450.739049 L51.5312591,449.764808 L51.3439744,448.938234 L51.1386815,447.737091 L51.1746978,447.661456 L50.8937706,446.310845 L50.5192011,445.185336 L50.2940992,444.810766 L49.7682612,443.533988 L49.8060784,443.38272 L49.7682612,443.008151 L49.9933631,442.332845 L50.9315877,440.832766 L51.4574257,439.78109 L51.5510681,439.480354 L51.5312591,439.330886 L51.7005357,438.504312 L51.7203447,437.904641 L51.5888852,437.378803 L51.1188725,436.554029 L50.9495959,436.121834 L50.7821201,435.878724 L49.1109638,433.795181 L48.2483734,432.55622 L47.1786892,430.717588 L47.1966974,430.661763 L46.9157703,430.193551 L46.8779531,429.986457 L46.3899323,428.95459 L46.3899323,428.823131 L45.9397285,427.753447 L45.9019114,427.470719 L45.7524438,427.171783 L45.6966185,426.908864 L45.4715166,426.458661 L45.0951463,424.994598 L44.9456786,424.618228 L44.9456786,424.470561 L44.7385849,424.038365 L44.6269344,423.456702 L44.6647515,423.305433 L44.5891173,422.779595 L44.6269344,422.179924 L44.7025686,421.954822 L44.7025686,421.203882 L44.796211,420.904947 L44.6071254,420.229641 L44.4018325,419.984731 L44.2469624,419.638974 L44.7385849,419.516519 L44.9636868,419.516519 L45.7146266,419.177965 L46.071188,418.897038 L46.3899323,418.464843 L46.5412007,418.088472 L46.859945,417.713903 L47.103055,417.544626 L47.628893,417.413167 L48.0790968,417.189866 L48.397841,416.739662 L48.4356581,416.13819 L48.2861905,415.538518 L47.3479659,413.998821 L47.1606811,413.379341 L47.1408721,413.154239 L47.2903398,412.64821 L47.5730677,412.441116 L47.891812,412.347474 L48.1925481,412.347474 L49.2244151,411.933287 L49.3180575,411.972905 L49.692627,411.933287 L51.0450391,412.347474 L51.1008643,412.423108 L51.7203447,412.572576 L52.2443819,412.534759 L52.8458541,412.666218 L53.8957292,413.060597 L54.1208311,413.02278 L54.6466691,412.722044 L55.0230394,412.741853 L55.2463405,412.873312 L55.6227108,413.26589 L56.3736507,413.492792 L57.4235259,414.186106 L57.724262,414.299558 L58.5490352,414.337375 L59.0010398,414.186106 L59.4512436,413.887171 L60.0887321,413.210064 L60.9135054,412.686027 L61.345701,411.933287 L61.7959047,411.245375 L62.0768319,411.409249 L62.2839256,411.634351 L62.640487,412.196206 L62.6224788,412.27184 L63.3914268,413.397349 L63.7659963,414.074456 L64.0667324,414.431017 L64.8176723,415.650169 L65.4173437,416.476743 L65.4173437,416.550576 L66.3555683,417.75172 L67.9690986,419.534527 L67.9889075,419.628169 L68.4391113,420.154007 L68.4391113,420.229641 L68.6444042,420.434934 L69.3953441,421.504618 L70.0526415,422.161916 L70.6721219,422.592311 L71.8732655,423.229799 L72.3414774,423.413482 L72.9987749,423.737629 L73.7497148,423.924914 L74.6501223,424.357109 L75.2497937,424.562402 L75.6999974,424.618228 L75.8512659,424.693862 L76.4509373,424.657846 L76.6382221,424.486768 L76.658031,424.394927 L76.5067626,423.869089 L76.132193,423.456702 L75.7756317,422.893047 L75.8872822,422.442843 L76.132193,422.142107 L76.395112,421.97283 L76.9767753,421.767537 L77.7277151,421.709911 L79.6041644,421.128248 L79.9787339,420.904947 L80.2038358,420.847321 L80.6162224,420.528577 L80.8791414,420.416926 L81.7615408,419.732616 L81.5166299,419.064514 L81.1618694,418.50266 L80.7476819,418.014639 L80.6918566,417.865171 L80.3172871,417.470793 L79.4348878,416.213824 L79.4348878,416.13819 L78.9468669,415.538518 L78.9468669,415.462884 L77.8213575,414.036639 L76.658031,412.722044 L75.1561513,411.202156 L75.0246918,410.921229 L74.7995899,410.715936 L74.4052114,410.094654 L74.0126338,409.307698 L72.7538641,407.620335 L72.3973027,407.054879 L72.1343837,406.343557 L72.0983674,406.005004 L71.8534566,405.142413 L71.6103465,403.076878 L71.2339762,401.538982 L71.2717933,401.465149 L71.0737037,400.743022 L73.0906165,400.22979 L73.7443123,399.756176 L74.2197275,399.25735 L74.3547886,398.601853 L74.399809,397.948157 L74.4466302,397.494352 L74.6501223,396.682184 L74.8986347,396.003277 L75.0787163,395.437821 L75.2137774,395.009227 L75.237188,394.647263 L75.3272287,394.240279 L75.4406801,393.719844 L75.6207616,392.884265 L75.6441722,392.498891 L75.6207616,392.138728 L75.8926846,391.866805 L76.2816607,391.875809 L76.901141,392.176545 L78.4246305,393.132778 L79.1899769,393.658616 L79.3412454,393.921535 L79.5663473,394.146637 L81.2014873,396.305814 L81.7237237,396.997327 L82.5502977,397.804092 L83.2057944,398.122836 L83.2814286,398.218279 L86.2833873,400.037103 L86.8092252,400.264005 L87.1639858,400.314428 L87.4467138,399.08087 L87.5601651,398.987227 L87.7096328,397.692442 L87.785267,397.485348 L87.8212833,396.060903 L87.5781733,394.935394 L87.2216119,393.808084 L87.0343271,393.451522 L86.99651,393.507347 L86.5841234,392.720391 L86.6399486,392.644757 L86.470672,392.344021 L86.207753,391.931634 L85.4766221,391.182495 L84.8769507,390.431555 L84.8013165,390.204653 L84.289885,389.44651 L84.0323685,389.079143 L83.9945514,388.929676 L83.2994368,387.991451 L83.2616197,387.841983 L83.0185096,387.465613 L82.1559193,386.395929 L82.1559193,386.264469 L81.4806136,385.439696 L81.5166299,385.290229 L81.3293452,384.840025 L81.1978857,384.089085 L81.0304099,383.543438 L81.0664262,383.487613 L80.8989504,382.437738 L80.9349667,382.210835 L80.8233161,381.686798 L80.8413243,381.386062 L80.6540395,380.710756 L79.9030997,379.210677 L79.3592535,378.346286 L78.6659398,377.445878 L78.7037569,377.372045 L78.4408379,376.995675 L78.3652037,376.750764 L78.0644675,376.244735 L78.0266504,375.943999 L77.8771828,375.569429 L77.9149999,375.418161 L77.5386296,374.55557 L77.5764467,374.479936 L77.5386296,374.332269 L77.1820682,373.579528 L76.9767753,373.280593 L76.8255068,372.886215 L76.7138563,372.792572 L76.5643886,371.366327 L76.6760392,369.732988 L76.7516734,369.641146 L76.6760392,368.326551 L76.7516734,367.575611 L76.7138563,366.97594 L76.5265715,365.962081 L76.5643886,365.736979 L76.4131202,365.286775 L76.4509373,365.211141 L76.3014696,364.687104 L76.3392868,364.61147 L76.1880183,364.10364 L76.2636525,364.009997 L75.9250993,363.10959 L75.8314569,362.659386 L75.626164,362.209182 L75.6441722,362.133548 L75.3812532,361.60771 L75.4010621,361.533877 L75.2696026,361.270958 L75.2876108,361.157507 L74.8554152,360.520018 L74.7995899,360.276908 L74.574488,359.920347 L74.0486501,358.794837 L74.0864672,358.643569 L73.6362634,357.89443 L73.6740805,357.818795 L73.6056496,357.681934 L74.5204636,357.525263 L76.5950025,357.346982 L79.8670834,357.604498 L82.0172565,357.80619 L84.1674296,358.007881 L85.4946303,360.561437 L87.7420474,360.674888 L89.0350326,361.114287 L91.5651777,361.240344 L95.0587588,360.851368 L97.8158066,360.145448 L100.869989,359.171208 L103.277679,357.975466 L105.206351,356.9454 L107.032378,356.097216 L109.557121,356.316916 L111.590241,356.983217 L114.302268,357.211921 L115.894189,357.291157 L118.32889,357.413612 L120.29538,357.510856 L123.414392,357.103872 L124.318401,355.92794 L125.049532,354.462076 L125.427703,352.509993 L126.342517,351.146776 L128.364833,350.120311 L133.988778,348.429346 L143.311597,345.092436 L150.003426,342.702754 L154.649528,339.9313 L157.552442,338.197115 L160.26447,336.549369 L162.567712,335.537311 L165.89922,334.671119 L168.348328,334.510847 L170.62816,333.967001 L171.24584,332.872105 L170.458883,331.705177 L168.834548,330.403188 L167.617197,328.465511 L167.714441,326.49722 L169.007427,325.06017 L170.566932,323.916652 L171.933751,322.859574 L174.271209,321.192019 L176.055817,319.308366 L180.557854,312.82003 L181.18994,309.564156 L181.766201,307.433792 L183.260877,305.724819 L185.043684,303.841166 L186.333068,302.497758 L186.289848,301.46229 L186.556369,299.879373 L187.058796,297.369037 L188.838001,295.579027 L191.713903,294.408497 L193.455291,293.369427 L194.434935,292.571666 L195.637879,291.035571 L198.209443,290.318846 L199.895006,290.403485 L202.039776,290.698818 L204.58793,290.450306 L207.472835,289.092491 L209.691439,287.887746 L212.273808,285.481857 L212.992333,284.813755 L212.592552,283.385709 L211.922649,282.951712 L212.288215,282.676187 L213.872932,281.93065 L215.387417,281.140092 L217.762692,280.62686 L219.323999,279.36809 L224.436513,274.83904 L227.371841,271.950533 L229.874974,269.02601 L231.809049,266.48686 L233.532429,263.832459 L233.811556,263.506512 L233.764734,262.550279 L233.881787,261.689489 L234.348198,261.455383 L234.791199,261.433774 L235.628578,261.363542 L237.434795,260.978167 L240.904966,257.414354 L241.650503,255.714385 L244.375136,255.784617 L246.098516,255.201153 L247.252839,254.048631 L249.721756,251.696767 L250.955315,249.669049 L251.142599,248.015901 L250.117936,245.359699 L250.125139,243.688542 L250.470895,242.964615 L250.829257,242.197468 L251.922352,241.898532 L253.811407,241.700443 L254.805457,241.700443 L256.197487,241.401507 L257.589517,240.605547 L258.583567,240.009477 L259.975597,239.910432 L261.169537,239.512452 L264.648712,237.623397 L267.630862,236.132323 L269.022892,235.932432 L271.806952,234.540402 L273.000892,232.752193 L273.796852,231.758143 L274.193031,228.774192 L274.790902,227.780143 L275.585061,227.681098 L276.878047,228.178123 L278.071987,228.675148 L281.353072,228.675148 L282.246276,227.879187 L283.440217,226.588003 L283.539261,225.295018 L283.638306,224.300968 L284.036286,223.902988 L285.030336,224.300968 L285.925341,225.493107 Z M48.612138,470.830742 L48.612138,471.20171 L48.8588497,472.518106 L50.0942088,473.506754 L50.8343437,475.069861 L50.9153804,476.056708 L50.9153804,477.455941 L50.9153804,478.442788 L51.5744787,479.676346 L52.973712,480.992742 L54.2072702,483.049272 L55.1112794,485.271478 L55.1941169,487.491883 L54.7006936,490.373187 L53.9605586,493.82715 L53.9605586,495.226383 L53.9605586,495.885482 L53.7948836,497.859175 L53.8777211,499.834669 L54.2072702,501.561651 L55.0302427,503.041921 L55.1941169,504.441154 L53.3842978,505.346964 L52.3146137,505.181289 L50.0113713,504.934577 L46.6384447,504.687866 L45.9793464,503.783856 L44.7457882,502.137911 L42.7702941,499.834669 L40.960475,498.928859 L39.3163309,498.023049 L36.2711527,496.706653 L32.8153887,495.143546 L29.278588,493.909988 L25.082689,492.100169 L20.3915659,491.030484 L17.1843144,490.947647 L15.2088203,490.947647 L12.4949921,490.86661 L10.1899489,490.290349 L7.88670647,489.467377 L7.03131934,488.145579 L7.02231526,488.118567 L7.06013238,488.042932 L6.96648999,487.891664 L6.87284761,487.517094 L6.89085576,487.367627 L6.66575389,486.391585 L6.57211151,485.640645 L6.53249358,484.515136 L6.49827809,483.83983 L6.59192047,482.714321 L6.81702235,481.738279 L6.91066473,481.549193 L7.06013238,481.437543 L9.91262336,480.349851 L12.4265611,479.654736 L12.5760288,479.654736 L13.0280333,479.48726 L13.177501,479.48726 L14.9044826,478.923605 L14.978316,478.961422 L15.4303206,478.811955 L16.5558299,478.62467 L17.9064412,478.509418 L19.1814182,478.549036 L22.0717263,478.473401 L23.7987079,478.529227 L23.9481756,478.585052 L24.9998515,478.640877 L26.8006666,478.923605 L28.6392987,479.48726 L28.7887663,479.598911 L29.1651367,479.710561 L29.2767872,479.824013 L30.9281346,480.423684 L31.079403,480.537135 L31.7547087,480.800054 L32.2049124,480.913506 L32.3543801,481.025156 L32.7865757,481.138608 L32.8424009,481.212441 L33.9679103,481.549193 L34.0435445,481.624828 L34.5693825,481.738279 L34.6432159,481.812112 L35.3203224,482.039015 L36.4080147,482.33795 L38.1349962,482.676504 L38.2088297,482.752138 L38.5095658,482.752138 L39.1092372,482.901605 L39.3163309,482.901605 L39.4477904,482.97724 L40.931662,483.175329 L41.1927801,482.489219 L41.5115244,480.312034 L42.0553705,478.509418 L42.1688219,478.361751 L42.8819446,476.670786 L43.9138116,475.039247 L44.8142191,473.933547 L45.5273419,473.218623 L45.6768095,473.14479 L46.2026475,472.618952 L47.2165064,471.756361 L48.6049347,470.836145 L48.612138,470.830742 Z"></path>
		)
	}
}
