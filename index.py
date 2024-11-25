from sanic import Sanic,response

index = Sanic("Personal_Portofolio")
index.static('/static', './static')
@index.route("/")
async def beranda(request):
    return await response.file('views/index.html')

if __name__ == "__main__":
    index.run(host="127.0.0.1", port=8000)