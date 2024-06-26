function cityTaxes(name, population, treasury) {
    city= {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasury -= Math.ceil(this.treasury * percent / 100);
        },
    }

    return city;
}
console.log(cityTaxes('Santo Domingo',
    12000,
    23500
));
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
