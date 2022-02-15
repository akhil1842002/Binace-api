fetch('https://api2.binance.com/api/v3/ticker/24hr')
    .then(resp => resp.json())
    .then(data => {

        for (i = 0; i < data.length; i++) {
            const { askPrice,
                bidPrice,
                highPrice,
                lowPrice,
                symbol,
                volume,
                openTime,
                priceChange } = data[i]
            setData(symbol, askPrice, bidPrice, highPrice, lowPrice, volume, openTime, priceChange)
        }
        function setData(sym, ask, bid, highPri, lowPri, vol, openTi, priceCh) {

            const tBody = document.querySelector('.data')
            const row = document.createElement('tr')
            tBody.appendChild(row)

            const symbolSet = document.createElement('td')
            symbolSet.innerText = sym

            const askSet = document.createElement('td')
            askSet.innerText = ask

            const bidSet = document.createElement('td')
            bidSet.innerText = bid

            const highpriceSet = document.createElement('td')
            highpriceSet.innerText = highPri

            const lowpriceSet = document.createElement('td')
            lowpriceSet.innerText = lowPri

            const volumeSet = document.createElement('td')
            volumeSet.innerText = vol

            const openTimeSet = document.createElement('td')
            openTimeSet.innerText = openTi

            const priceChSet = document.createElement('td')
            priceChSet.innerText = priceCh

            row.appendChild(symbolSet)
            row.appendChild(askSet)
            row.appendChild(bidSet)
            row.appendChild(highpriceSet)
            row.appendChild(lowpriceSet)
            row.appendChild(volumeSet)
            row.appendChild(openTimeSet)
            row.appendChild(priceChSet)
        }
        function search(da) {
            const findData = document.querySelector('.find-data')
            findData.addEventListener('submit', (e) => {
                e.preventDefault()
                const inputBox = document.querySelector('.input-box').value.toUpperCase()
                for (j = 0; j < da.length; j++) {
                    if (inputBox === da[j].symbol) {
                        const { askPrice,
                            bidPrice,
                            highPrice,
                            lowPrice,
                            symbol,
                            volume,
                            openTime,
                            priceChange } = data[j]
                        searchDataSet(symbol, askPrice, bidPrice, highPrice, lowPrice, volume, openTime, priceChange)
                    }
                }
            })
        }
        search(data)

        function searchDataSet(sym, ask, bid, highPri, lowPri, vol, openTi, priceCh) {
            const tBody = document.querySelector('.searchDataSet')
            const searchDataSetRow = document.createElement('tr')
            tBody.appendChild(searchDataSetRow)

            const symbolSet = document.createElement('td')
            symbolSet.innerText = sym

            const askSet = document.createElement('td')
            askSet.innerText = ask

            const bidSet = document.createElement('td')
            bidSet.innerText = bid

            const highpriceSet = document.createElement('td')
            highpriceSet.innerText = highPri

            const lowpriceSet = document.createElement('td')
            lowpriceSet.innerText = lowPri

            const volumeSet = document.createElement('td')
            volumeSet.innerText = vol

            const openTimeSet = document.createElement('td')
            openTimeSet.innerText = openTi

            const priceChSet = document.createElement('td')
            priceChSet.innerText = priceCh

            searchDataSetRow.appendChild(symbolSet)
            searchDataSetRow.appendChild(askSet)
            searchDataSetRow.appendChild(bidSet)
            searchDataSetRow.appendChild(highpriceSet)
            searchDataSetRow.appendChild(lowpriceSet)
            searchDataSetRow.appendChild(volumeSet)
            searchDataSetRow.appendChild(openTimeSet)
            searchDataSetRow.appendChild(priceChSet)
            const tBodys = document.querySelector('.data')
            tBodys.style.display = 'none'
        }
    })

