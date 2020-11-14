export const xxxMixin = {
  
  methods: {
    giveMoney(money){
      this.money -= money
      this.$parent.money += money 
    }
  }
}