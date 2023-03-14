

function reload(arr, pl) {
//    console.log(item,pl);
    pl.innerHTML = ""
    for(let item of arr){
        //th
        // let tRow = document.createElement("tr")
        // let id = document.createElement('th')
        // let push_wallet = document.createElement('th')
        // let catg = document.createElement('th')
        // let money_tran = document.createElement('th')
        // let when_tr = document.createElement('th')
        //td
        let tRow_td = document.createElement('tr')
        let number = document.createElement('td')
        let card = document.createElement('td')
        let catg_td = document.createElement('td')
        let money_tran_tg = document.createElement('td')
        let when_td = document.createElement('td')

        // id.innerHTML = "ID"
        // push_wallet.innerHTML = 'Отправлено с кошелька' 
        // catg.innerHTML = 'Категория'
        // money_tran.innerHTML = 'Сумма транзации'
        // when_tr.innerHTML = "Когда"

        number.innerHTML = arr.indexOf(item) + 1
        card.innerHTML = item.wallet
        catg_td.innerHTML = item.puschased
        money_tran_tg.innerHTML = item.money
        when_td.innerHTML = item.when

        tRow_td.append(number,card,catg_td,money_tran_tg,when_td)
        pl.append(tRow_td)
    
        reload(arr,pl)
    }

}