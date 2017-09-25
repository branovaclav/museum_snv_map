import React from 'react'

export default class extends React.Component {
	render() {
		return (
	        <polyline ref="elem" onClick={ this.props.onClick } points="74.5560285 193.962665 74.4700408 194.108503 74.0486501 194.819825 73.2869053 195.486127 71.9525014 196.343315 70.7135407 197.011417 69.6654663 197.486832 68.9037216 198.439464 68.5219488 199.392095 66.8075729 200.44197 66.2349137 201.108271 65.424547 203.350286 65.044575 204.209275 64.6628022 205.541878 64.7582454 206.49631 64.8536886 207.258055 65.044575 208.115243 65.2354614 209.25876 65.044575 210.211391 64.2810294 212.500227 64.2810294 213.83283 63.9010575 215.260877 63.1393127 215.928979 62.7575399 217.454269 62.3757671 218.311457 61.5185792 220.313963 61.5185792 221.837453 61.7094656 222.599198 61.8049088 223.742715 61.9957952 224.50446 61.8049088 225.268006 61.8049088 226.125194 61.9957952 226.984182 62.309137 228.080879 62.280324 228.889445 62.3757671 230.412934 62.6620967 231.271923 62.4712103 232.604526 62.4712103 233.654401 63.1393127 234.416146 63.5192847 235.462419 63.7101711 237.083153 63.5192847 239.465631 63.2329551 240.515506 61.9957952 241.657223 59.7087601 243.562485 57.6108106 246.42218 55.5146619 250.232704 54.3711444 252.710626 53.8002861 254.04503 52.7522117 255.57032 52.0210808 256.339268 51.036035 257.475582 50.0834039 259.476288 49.7034319 262.240539 49.2262159 263.859471 49.1307727 264.623017 49.0353295 265.957421 49.5125455 268.624428 49.6079887 270.147917 49.4171023 270.911463 48.9398863 271.864094 48.4644712 272.530396 48.1781416 273.483027 47.5100392 274.151129 46.7482945 274.819231 46.4619649 276.438164 46.7482945 280.059603 46.9157703 282.243992 47.4127952 284.42838 48.4554671 285.173918 49.5971838 285.82041 49.2010045 286.812659 48.4068451 288.004799 47.960243 289.344605 48.1583326 290.63579 48.5058899 291.925173 48.2069546 293.315403 48.2069546 294.557965 48.017869 296.032832 48.3420157 297.02148 48.7165853 298.146989 49.0551385 298.897929 49.6187936 299.798337 50.6866769 301.75042 51.6068934 304.377809 52.2263737 305.48351 53.0889641 306.272267 53.9713635 306.646836 55.397609 306.742279 56.8238545 307.041215 59.0010398 307.341951 60.2003826 307.640886 62.5270356 308.46746 63.8038135 309.180583 66.4113936 311.114658 68.5129447 312.558912 69.357527 313.178392 70.4146054 313.938336 69.5268036 315.355577 68.1942005 317.006925 67.4810777 317.92534 66.7121297 319.108476 65.9431817 320.365445 65.2480671 321.602605 64.5547533 322.78574 63.3338007 324.943117 62.7899546 325.881341 62.2082913 327.494871 62.4910193 328.696015 63.0150565 329.63424 64.0667324 331.399038 64.5925704 331.960893 65.6802627 333.761708 66.505036 334.8494 67.2181587 336.050544 67.7439967 336.72765 68.7956727 338.378997 69.5087954 339.691792 70.4650282 340.968569 71.2717933 341.906794 72.5485712 344.420732 72.8114901 345.096037 73.1482426 346.372815 73.5228121 347.685609 74.1621014 350.05008 73.9550077 352.113814 73.2238768 354.928487 73.2040678 356.167448 73.6056496 357.681934 74.5204636 357.525263 76.5950025 357.346982 79.8670834 357.604498 84.1674296 358.007881 85.4946303 360.561437 87.7420474 360.674888 89.0350326 361.114287 91.5651777 361.240344 95.0587588 360.851368 97.8158066 360.145448 100.869989 359.171208 103.277679 357.975466 105.206351 356.9454 107.032378 356.097216 109.557121 356.316916 111.590241 356.983217 114.302268 357.211921 115.894189 357.291157 118.32889 357.413612 120.29538 357.510856 123.414392 357.103872 124.318401 355.92794 125.049532 354.462076 125.427703 352.509993 126.342517 351.146776 128.364833 350.120311 133.988778 348.429346 143.311597 345.092436 150.003426 342.702754 154.649528 339.9313 157.552442 338.197115 160.26447 336.549369 162.567712 335.537311 165.89922 334.671119 168.348328 334.510847 170.62816 333.967001 171.24584 332.872105 170.458883 331.705177 168.834548 330.403188 167.617197 328.465511 167.714441 326.49722 169.007427 325.06017 170.566932 323.916652 171.933751 322.859574 174.271209 321.192019 176.055817 319.308366 180.557854 312.82003 181.18994 309.564156 181.766201 307.433792 183.260877 305.724819 185.043684 303.841166 186.333068 302.497758 186.289848 301.46229 186.556369 299.879373 187.058796 297.369037 188.838001 295.579027 191.713903 294.408497 193.455291 293.369427 194.434935 292.571666 195.637879 291.035571 198.209443 290.318846 199.895006 290.403485 202.039776 290.698818 204.58793 290.450306 207.472835 289.092491 209.691439 287.887746 212.273808 285.481857 212.992333 284.813755 212.592552 283.385709 211.922649 282.951712 213.872932 281.93065 215.387417 281.140092 217.762692 280.62686 219.323999 279.36809 224.436513 274.83904 227.371841 271.950533 229.874974 269.02601 231.809049 266.48686 233.532429 263.832459 233.764734 262.550279 233.881787 261.689489 234.791199 261.433774 235.628578 261.363542 237.434795 260.978167 240.904966 257.414354 241.650503 255.714385 244.375136 255.784617 246.098516 255.201153 247.252839 254.048631 249.721756 251.696767 250.955315 249.669049 251.142599 248.015901 250.117936 245.359699 250.125139 243.688542 250.470895 242.964615 249.338183 241.302462 248.144242 239.710542 247.150192 238.518402 246.851257 236.132323 246.851257 234.144223 246.554123 232.752193 246.057098 230.166222 245.261137 227.780143 244.863157 225.195973 244.863157 223.405963 245.459227 222.112978 246.255187 220.223923 246.455078 218.532957 245.857207 216.544858 245.063048 216.247723 243.869107 215.849743 242.278988 214.954738 241.085047 213.263773 238.997903 211.275673 237.605873 209.188528 237.605873 207.497563 237.405982 204.515413 237.009803 201.432418 236.710868 199.743254 236.512778 198.351224 234.025853 197.058238 230.447633 195.070139 228.558578 194.274178 225.376538 193.678109 223.586528 193.579064 221.796518 193.579064 220.901513 193.478218 218.913413 192.086188 217.820318 191.092138 216.626378 189.800954 215.931263 189.700108 214.937213 190.098088 213.842318 191.391074 212.252198 192.684059 211.159104 193.777153 209.965163 194.472268 208.673979 194.274178 207.579083 194.373223 206.485989 195.169183 205.193003 196.064189 203.105859 196.660258 200.519888 196.959194 199.127858 197.058238 197.935719 196.660258 197.139759 196.262278 196.343798 196.064189 194.539382 195.709428 192.382005 195.709428 190.224629 195.428501 189.569132 195.709428 188.72455 196.273083 187.599041 195.896713 186.941743 194.396634 185.909876 193.458409 184.971652 193.271124 183.846142 193.364767 182.158779 193.739336 181.220554 194.396634 180.188687 194.302991 178.78225 194.115707 177.563099 194.115707 176.718516 193.739336 175.593007 191.675602 175.31208 190.550093 174.93751 189.894596 173.999286 189.520027 172.967419 189.520027 171.278254 189.143656 169.403606 188.862729 167.995369 188.862729 165.74435 189.424584 164.337913 190.456451 163.776059 190.081881 162.367822 189.424584 160.493173 188.581802 159.367664 188.394517 158.242154 188.111789 156.646632 187.549935 155.991136 186.892638 155.146553 185.860771 154.771984 183.89248 153.552832 182.3906 151.95731 181.171448 149.893576 180.139581 147.925285 179.671369 147.267988 179.858654 145.674266 179.577727 144.642399 178.639502 142.76595 178.452218 140.983143 177.888563 138.451197 176.388484 136.293821 173.856538 133.668233 172.4483 132.82365 171.886446 131.604499 171.322791 130.198062 172.918313 129.259838 174.418392 127.196104 176.201199 126.164237 177.233066 124.00686 178.358575 121.944927 179.107714 117.347446 179.952297 115.472798 180.703236 114.347288 181.452375 113.502706 181.922388 112.002627 182.577885 110.97076 184.267049 110.126178 184.922546 109.375238 184.547977 108.532457 183.516109 106.562365 183.422467 104.966843 184.079765 103.747691 185.298916 102.622182 187.36265 101.966685 188.581802 101.7794 189.707312 102.247612 191.301033 102.52854 192.520185 101.255363 193.065832 100.183878 193.08384 98.3092299 192.707469 97.3710053 191.771046 96.994635 189.894596 96.5264231 188.956372 95.6818408 189.143656 94.9327018 189.050014 95.1199865 187.643578 95.6818408 186.330783 95.2136289 184.922546 94.3690467 183.89248 92.7753254 183.14154 91.7434584 182.76697 90.1479363 182.109673 89.3051549 182.109673 88.4605726 182.954255 87.0541361 184.454334 85.6458988 186.611711 83.9585351 188.299074 81.7075163 190.269166 79.3628552 191.020106 77.8609754 192.145615 76.4545389 193.177482 74.7671753 193.926621 74.5560285 193.962665"></polyline>
		)
	}
}
