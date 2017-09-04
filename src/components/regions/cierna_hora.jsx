import React from 'react'

export default class extends React.Component {
	render() {
		return (
	        <polygon ref="elem" onClick={ this.props.onClick } points="863.281046 806.279739 848.535948 798.750327 838.183007 790.594771 831.281046 780.555556 823.751634 765.184314 819.673203 747.303268 819.045752 736.010458 815.594771 715.305882 804.301961 702.756863 791.752941 695.228758 783.596078 690.20915 786.733333 686.75817 788.615686 681.111111 782.654902 673.583007 774.811765 662.91634 767.282353 652.25098 769.478431 646.603922 772.929412 642.211765 773.556863 642.211765 773.870588 641.898039 774.498039 641.584314 776.380392 638.762092 776.694118 638.447059 777.007843 638.447059 778.262745 638.133333 778.576471 637.820915 778.890196 637.50719 779.203922 636.879739 780.145098 634.056209 780.458824 633.428758 780.772549 633.115033 781.4 633.115033 781.713725 633.428758 788.301961 638.447059 802.105882 644.094118 810.576471 645.035294 809.321569 648.486275 808.694118 651.623529 808.066667 654.133333 808.066667 656.329412 807.752941 657.896732 808.066667 659.465359 808.380392 660.406536 808.694118 661.033987 808.694118 661.661438 809.007843 661.975163 809.321569 661.975163 809.947712 662.91634 812.772549 665.739869 813.712418 666.36732 815.281046 667.935948 815.908497 667.935948 815.908497 668.249673 816.537255 668.563399 816.849673 668.877124 817.79085 669.504575 818.104575 669.818301 819.988235 671.386928 820.615686 671.700654 821.869281 672.64183 822.496732 673.269281 823.437908 673.583007 824.379085 674.524183 825.006536 674.837908 825.320261 675.151634 826.261438 675.779085 826.575163 676.09281 827.202614 676.406536 827.51634 676.720261 828.457516 677.033987 828.457516 677.660131 828.771242 677.660131 828.457516 677.660131 828.771242 678.287582 828.771242 682.993464 829.398693 686.75817 829.712418 687.071895 829.712418 689.581699 830.026144 690.836601 830.026144 691.150327 830.339869 691.777778 830.339869 692.091503 830.96732 692.405229 830.96732 692.718954 831.281046 693.03268 831.281046 693.346405 831.908497 694.287582 832.222222 695.542484 832.535948 696.169935 832.222222 697.111111 831.908497 697.423529 831.594771 698.364706 830.96732 698.992157 830.96732 699.305882 831.281046 699.619608 832.849673 699.933333 833.477124 700.247059 834.104575 700.247059 835.673203 701.501961 836.614379 702.129412 838.183007 703.698039 838.810458 703.698039 839.124183 704.011765 843.51634 704.011765 845.398693 704.32549 845.398693 704.639216 846.026144 704.639216 847.281046 704.952941 847.908497 704.952941 848.535948 704.639216 849.163399 704.639216 850.104575 704.011765 851.359477 703.698039 852.614379 703.384314 852.928105 703.384314 853.869281 703.070588 854.810458 703.070588 856.065359 703.698039 857.320261 704.952941 857.633987 704.952941 859.202614 704.639216 859.830065 704.32549 860.457516 704.32549 861.712418 704.011765 862.026144 704.011765 863.908497 703.698039 864.535948 703.698039 863.281046 705.266667 863.281046 707.14902 863.594771 707.462745 863.594771 708.090196 864.222222 709.345098 864.222222 710.6 864.535948 711.227451 864.535948 711.854902 864.849673 711.854902 865.163399 712.168627 865.163399 712.482353 865.477124 712.796078 865.477124 713.109804 866.104575 713.423529 866.418301 714.05098 866.418301 714.364706 866.732026 714.678431 867.986928 717.186928 868.300654 718.44183 869.24183 720.010458 869.555556 721.265359 870.183007 722.520261 870.810458 723.461438 870.810458 724.402614 871.124183 724.71634 871.124183 725.343791 870.810458 725.343791 870.810458 725.971242 870.183007 727.226144 870.496732 727.853595 870.496732 728.794771 870.810458 728.794771 870.810458 729.422222 871.124183 730.049673 871.124183 731.304575 870.810458 732.559477 870.810458 733.186928 870.496732 734.128105 870.810458 734.128105 870.810458 738.83268 870.496732 739.146405 870.496732 740.087582 869.555556 741.969935 869.24183 742.28366 868.928105 742.597386 867.359477 742.597386 866.732026 741.969935 866.104575 740.401307 865.477124 739.460131 865.163399 739.146405 865.163399 738.518954 864.849673 738.205229 863.908497 736.950327 862.026144 734.755556 860.771242 733.500654 860.143791 733.186928 859.51634 732.873203 858.888889 732.873203 858.261438 733.186928 857.947712 733.500654 858.261438 734.755556 858.575163 735.383007 858.888889 735.696732 858.888889 736.636601 858.575163 736.950327 858.261438 737.577778 857.320261 738.205229 856.69281 738.518954 852.928105 739.773856 852.300654 739.773856 851.986928 740.401307 851.673203 740.715033 851.359477 741.656209 851.045752 742.28366 851.045752 742.911111 850.732026 744.479739 850.732026 747.303268 850.418301 747.616993 850.418301 749.185621 850.104575 749.185621 850.104575 749.813072 849.79085 750.440523 849.477124 750.440523 848.535948 752.322876 848.222222 753.264052 848.222222 755.146405 848.535948 756.401307 849.163399 757.342484 849.477124 757.654902 849.79085 758.282353 850.418301 758.596078 851.045752 759.223529 852.300654 759.223529 852.300654 759.537255 854.183007 759.537255 854.810458 759.85098 855.437908 759.85098 855.437908 760.164706 856.065359 760.164706 857.633987 760.792157 858.888889 761.419608 859.202614 761.733333 860.457516 762.047059 860.771242 762.360784 862.339869 762.988235 862.653595 763.301961 862.96732 763.301961 864.222222 763.929412 864.849673 764.243137 865.163399 764.556863 865.79085 765.498039 866.104575 765.811765 866.104575 766.439216 865.79085 768.321569 865.79085 769.262745 865.477124 769.576471 865.477124 771.458824 865.163399 771.458824 865.163399 775.535948 866.418301 776.79085 868.928105 776.79085 870.183007 776.477124 870.810458 776.477124 871.437908 776.164706 872.065359 776.477124 872.69281 778.045752 873.006536 778.986928 873.320261 779.300654 873.633987 780.555556 873.633987 786.202614 873.947712 787.771242 873.947712 788.398693 874.261438 789.339869 874.261438 789.653595 874.888889 791.222222 874.888889 792.79085 874.575163 793.418301 873.006536 794.986928 872.065359 795.299346 869.24183 796.555556 868.928105 796.555556 867.359477 796.867974 867.045752 797.181699 866.104575 797.181699 863.908497 796.867974 863.281046 797.181699 862.653595 797.181699 862.653595 796.867974 860.771242 796.867974 859.51634 797.181699 859.202614 797.181699 858.575163 797.495425 857.947712 798.122876 857.320261 799.064052 857.006536 799.377778 857.006536 800.005229 857.320261 800.318954 857.633987 800.63268 858.261438 800.63268 858.261438 800.946405 860.771242 801.260131 861.398693 801.573856 862.339869 801.573856 862.653595 801.887582 862.96732 802.201307 863.594771 803.142484 863.594771 803.769935 863.281046 804.08366 862.96732 804.711111 862.96732 805.024837 863.594771 805.652288 863.594771 805.966013"></polygon>
		)
	}
}