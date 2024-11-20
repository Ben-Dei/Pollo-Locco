class StatusBar extends DrawableObjects {
    constructor(){
        super();
    }


    setPercentageForHealthBar(healthpercentage){
        this.healthpercentage = healthpercentage;

        let path = this.IMAGES_HEALTH[this.resolveHealthImgageIndex()];
        this.img = this.imgageCache[path];
    }    

    setCoinBarPercenage(coinPercentage){
        this.collectCoinPercentage = coinPercentage;

        let path = this.IMAGES_COINS[this.resolveHealthImgageIndex()];
        this.img = this.imgageCache[path];
    }

    setBottlePercentage(bottlePercentage){
        this.bottlePercentage = bottlePercentage;

        let path = this.IMAGES_BOTTLES[this.resolveBottleImgageIndex()];
        this.img = this.imgageCache[path];
    }

        resolveHealthImgageIndex() {
            if (this.healthpercentage == 100) {
                return 5;
            } else if (this.healthpercentage > 80) {
                return 4;
            } else if (this.healthpercentage > 60) {
                return 3;
            } else if (this.healthpercentage > 40) {
                return 2;
            } else if (this.healthpercentage > 20) {
                return 1;
            } else {
                return 0;
            }
        }

        resolveCoinImgageIndex() {
            if (this.coinPercentage == 0) {
                return 0;
            } else if (this.coinPercentage > 20) {
                return 1;
            } else if (this.coinPercentage > 40) {
                return 2;
            } else if (this.coinPercentage > 60) {
                return 3;
            } else if (this.coinPercentage > 80) {
                return 4;
            } else {
                return 5;
            }
        }

        resolveBottleImgageIndex(){
            if (this.bottlePercentage == 0) {
                return 0;
            } else if (this.bottlePercentage > 20) {
                return 1;
            } else if (this.bottlePercentage > 40) {
                return 2;
            } else if (this.bottlePercentage > 60) {
                return 3;
            } else if (this.bottlePercentage > 80) {
                return 4;
            } else {
                return 5;
            }
        }
}
