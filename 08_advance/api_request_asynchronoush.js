const requestUrl = 'https://randomuser.me/api/'

        const xhr = new XMLHttpRequest()
        xhr.open('GET', requestUrl)
        xhr.onreadystatechange = function () {
            console.log(xhr.readyState)
            if (xhr.readyState === 4) {
                const data = JSON.parse(this.responseText)
                console.log(data.results[0])
                const userDetails = data.results[0]
                const nameObj = userDetails.name;
                const locationObj = userDetails.location;
                
                const firstName = nameObj.first
                const lastName = nameObj.last
                const gender = userDetails.gender
                const email = userDetails.email
                const phNumber = userDetails.phone
                const city = locationObj.city
                const country = locationObj.country
                const state = locationObj.state
                
                const getDiv = document.querySelector(".container")
                const table = document.createElement("table")
                const tr = document.createElement("tr")
                const tr2 = document.createElement("tr")
                const th1 = document.createElement("th")
                const th2 = document.createElement("th")
                const th3 = document.createElement("th")
                const th4 = document.createElement("th")
                const th5 = document.createElement("th")
                const th6 = document.createElement("th")
                const th7 = document.createElement("th")
                const th8 = document.createElement("th")
                const td1 = document.createElement("td")
                const td2 = document.createElement("td")
                const td3 = document.createElement("td")
                const td4 = document.createElement("td")
                const td5 = document.createElement("td")
                const td6 = document.createElement("td")
                const td7 = document.createElement("td")
                const td8 = document.createElement("td")

             

                const userFunc = (fName, lName, gen, em, ph, ci, coun, sta) => {
                    
                    // th.innerText += "Last Name"
                    
                    th1.innerHTML = "First Name"
                    th2.innerHTML = "Last Name"
                    th3.innerHTML = "Gender"
                    th4.innerHTML = "Email"
                    th5.innerHTML = "Phone Number"
                    th6.innerHTML = "Country"
                    th7.innerHTML = "State"
                    th8.innerHTML = "City"

                    td1.innerHTML = fName
                    td2.innerHTML = lName
                    td3.innerHTML = gen
                    td4.innerHTML = em
                    td5.innerHTML = ph
                    td6.innerHTML = coun
                    td7.innerHTML = sta
                    td8.innerHTML = ci
                 

                    table.setAttribute("style", "border: 1px solid black; text-align: center;")
                    tr.setAttribute("style", "border: 1px solid black;")
                    th1.setAttribute("style", "border: 1px solid black;")
                    th2.setAttribute("style", "border: 1px solid black;")
                    th3.setAttribute("style", "border: 1px solid black;")
                    th4.setAttribute("style", "border: 1px solid black;")
                    th5.setAttribute("style", "border: 1px solid black;")
                    th6.setAttribute("style", "border: 1px solid black;")
                    th7.setAttribute("style", "border: 1px solid black;")
                    th8.setAttribute("style", "border: 1px solid black;")
                    td1.setAttribute("style", "border: 1px solid black;")
                    td2.setAttribute("style", "border: 1px solid black;")
                    td3.setAttribute("style", "border: 1px solid black;")
                    td4.setAttribute("style", "border: 1px solid black;")
                    td5.setAttribute("style", "border: 1px solid black;")
                    td6.setAttribute("style", "border: 1px solid black;")
                    td7.setAttribute("style", "border: 1px solid black;")
                    td8.setAttribute("style", "border: 1px solid black;")
                    tr.append(th1)
                    tr.append(th2)
                    tr.append(th3)
                    tr.append(th4)
                    tr.append(th5)
                    tr.append(th6)
                    tr.append(th7)
                    tr.append(th8)
                    tr2.append(td1)
                    tr2.append(td2)
                    tr2.append(td3)
                    tr2.append(td4)
                    tr2.append(td5)
                    tr2.append(td6)
                    tr2.append(td7)
                    tr2.append(td8)
                    table.append(tr)
                    table.append(tr2)
                    getDiv.append(table)
                } 
               userFunc(firstName, lastName, gender, email, phNumber, city, country, state)

            }


        }
        xhr.send()