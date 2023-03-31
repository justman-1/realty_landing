import axios from "axios"

class Axios {
  async sendPhone(body) {
    try {
      const { data } = await axios({
        url: "https://api-invest.ru/site/form-phone",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "1546313asdasca13554635136",
        },
        body: body,
      })
      return [null, data]
    } catch (err) {
      err = err.response
      return [{ status: err.status, text: err.data }, null]
    }
  }

  async sendCalc(body) {
    try {
      const { data } = await axios({
        url: "https://api-invest.ru/site/form-calc",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "1546313asdasca13554635136",
        },
        body: body,
      })
      return [null, data]
    } catch (err) {
      err = err.response
      return [{ status: err.status, text: err.data }, null]
    }
  }
}

export default new Axios()
