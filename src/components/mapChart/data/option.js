/*
* 地图option配置参数
*李万金
* 2020-04-17
* */
import cityJson from "./cityJson";
const options =  {
	tooltip: {
		trigger: 'item',
		formatter: function(params) {
			if (params.seriesIndex === 1){
				return params.data.name;
			} else{
				return ;
			}
		}
	},
	geo: {
		map: 'city',
		roam: false,
		zoom: 1,
		label: {
			normal: {
				show: false,//显示省份标签
				textStyle:{color:"#fff"}//省份标签字体颜色
			},
			emphasis: {//对应的鼠标悬浮效果
				show: false,
				textStyle:{color:"#800080"}
			}
		},
		regions:cityJson,
		aspectScale:0.8
	},
	series: [
		{
			type: 'map',
			mapType: 'city',
			geoIndex:0,
		},
		{
			//文字和标志
			name: '龙源黑龙江分公司范围内',
			type: 'scatter',
			coordinateSystem: 'geo',
			data: [
				{
					value:[129.60,44.58],
					name:'风场1'
				},
				{
					value:[127.48,50.25],
					name:'风场2'
				},
				{
					value:[126.98,46.63],
					name:'风场3'
				},
			],
			symbol:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAKiUlEQVRoQ82Ze1xU1RbHf3sG0ABRMdAy08pRs27Zw89HS5ix+iQMZCQzVlpebvnqqjfMx6UP3SuKGpoaooKiCIQpOAfk4RwIM+YMmmCQeMsKAcVUBEFEeclr9v3sMwyNMSDh+Nj/zT77rP377r3XOmvtIbhDzc1TPZYQOp2AFhK7tnRdcnLNnZiK3Amjci+VGhT7zWwXEAMW6zI4nbXn6zWAwkOloBIsAjCNAiv1PBdkEidXqph49YhHh6H09/Om7nCB5xbcc4CXp07tZ9NqtwnAbJMYCwBHAbw0e9a7kEgkiIz5GgDJEXjNxHsKoHjDdwxtk6QAdFS7kBOEYL1Oy8WbC5MrVScAjFs4xw92drbYtG0ne1wo8NyYewbwny8jP9Efytxovur10qb1/VptnQ1EMhsU3+vTuUz2XK5UnQYgW7JoHhweeACr1oey7gqB54bcE4CgzVFBWd+kr2CT2zs4FDTW1osOaXRWslrcEYJTgpZ7uh3gAoChgUsXob+TE5b/dw3rbhJ4ru9dB1i2JmzD8aP6JWzix2WjyqI3rx1qFOm7HiDLLPmBXKm6CmBAcOBSODsPxIIlgeIwe1rfNz09vcmaEN1GoZVhMV55x46kXr9WI5GNGVs1c978J/Nyv3+i4FiO5sK50mFMCAVJJIRuFrRcdkcU8lQ1g8B2/apADHZ1wd/n+4uPbGxshxxO3Vdx1wD8Fn36+9mSomH9Bzi3ekz1cXvyuXHF4SGfl16uuOTARBCCZTott8Fc0Atz59o6XqhuZn1h61dh6END4Pv+XHGIxEDGZGVoCu8KwOqIPesOpSUvZ5M9++L42LcmL59t80jVgagtX3pXVVZg5OgxEaFBy/75ZzEKH58BtNmGHSFEbl6H4cMewZRpM40AoBOy+MTcuwKQ8F3eCW5P7DinAQOKozYFy7JPX14NAuNhpvB3G+W62ZKQV7zVQ9sMlDkxYreHYviwoZjy1kw0NTdDQqhHljbxmzsOkF10WQ2YUoG2yQZqWyElhhwKOIEgzG2k68ddiXD39pURA2FhFAnR4aIPsCN0pfoqCCXv6NI1CXcBoDINoN4AdG4y18lHiirDKehHBOS3lv50/GRX17quRCiU6nEUlH3IkLIvSgyjs+b74/fzF0GA+Tqe23FHAdLyyuy52LBax35Oknf/MWfxJJlLaHZRZSpA3yAgb06SuaR2J8DdS/USoWCpBDKS9qBvnz7wmfEhaq5dBwiNELSJnfzmdoA6hdGoVGH6V9u3iNu8OiziRbeRLvnZJZWjYGh92E320C2zSYWHzwgqsTk77m9PITTEmN+pZs1D1ZVqgOCAoOWm3Y7gP7/bCUAorAi6XF62wtbWrtjnpadkvZms9Pyl/Q86O6kd7O3F1zduiURaxiEGUCxouV7Z7EpHZ4CiitclIJ8CCHeTuWp6A9DaZiiSSshI07u5eSfw7xVrxZ+EGibq0pNyemPX0ju9rge6EkApncr8lz2vq69HXV0Dhgx2wcw5i3CxrJx1Hze0GXyyv0m6ZA0IqwG4efg+k52R+D9KKWXCCn46Bf8Aow8wXyg+U4qtkTHtmklOXcVA9/z8yJbbhbDoA1IpGd4itV08+bGBt6xj5Z4qTxCwI+f2/tvTbnw4610x4+SStdi60yg4YPECeLymQMzX+xGzt+NUlkskeC/rIHf4diA6AWQXXc4CoADoLDfZ4LjujMs9VWEgYlkJB3t7w7KP50sUk4xFV3lFJbiUg+IRWjjPD44OYvqEbbtiRbj2jQIFDamXNgfnp6U19AakE4C+6MpYamidLh89uKPG/bNhhbdqJm1DEAhER500cTz8ZkzHyMdH9EgDO04xe/fjyLEfTEfqB1BDsJCemNYjA2aD/rIPmAp2ZsPWxgbzPngPqje9Okx+EbYdp0vOgBqouAvMkVlzeXAQxj09FoHL/tUxlkvRYkf0HrS0tIp9BGSztE9r8OEDB670FKTHAApPtYqCRoPAkRmfMP55sKLdtOqHhSMIjYhCbW2XWYaoiR2lhXP9RJ9gje3Grq/2IeeHH42aKU5RkGB9D3OmHgHIlap0AB6mVWECTKsuHM3B7rgEnDsvJqBiGzDQufX5CRNtXIc8JP7OP/Y9in775aZFZaGVHTsTiCb5ILbtjP1jDMFO2mITrM+M77iXsbQr3QKw0CiRkJOmF5975iksmOMnrvrR3DzsjotHydlz5najDRKyPXzHzqSahmax9GTtx9xjSNorxoOLoFQLQowVDiB+I0wgplDLQnB7O0MJWazXarrMv7oEaL//KQIwmBljx+W9t6fheH4BouLiUVhUYiacxBlo247s9KSjLBcKWrfxR6l9v4GmAadOFmDf7kj2s0rgOZfJXuoXDAbD3K5A4uITxTmMjVRJCDyytJr8v7QDCqU6gIJ+7tTPEetWBaKxsVE8Kj//alYRUsRLQLZnpWsEk3G50vcsQEakcHvR1NqG0xW1KDldiOhtYv3TIvCcnWlsdyDsVi8gaK0xiwVZIvAadpnWqXW5A+5K9QwCyq7UwDJLs21l4YIjoDt02sRvzS0qFH59qX1dI+vbumE1nn5yNI6WVOLCuXOI2LjOuJ4Njg/odDE3zN/rCoRFMfGdbgqhLgEUCrUjtae15hNRIIWtuI7XZFhajVdffWtQax9pFXsWtfULPPHYCOScqUJ5eQVC1xg/K93dTFgCYTGANBCFTqexGN66dWJWoBuabfwlFDWUkFMCrzlkSbip72Vv9aM2Bip69dc7t2Dow0NwvPQKqq/WIOSzAHFYG9pGH+EPiCVnV42BtBkMzxIJqRW0XLcZcY/CaHeT3XSExLtT8ivrS4yLxCDngcg/V43rDTewcqmxjCag43V8Yl5Pbd5qnFUBxCNAqShOuz8WDg72OHH+KuqbWvHZx8ZKUmLAa1kZt5fAmUNZFcBdOc2dQCJGpMOp8ZBKpTh5oQa1N1qwOmAJbjQ2ghL46rVc0q1WtqfPrQrQnlrzdnZ2yDwgBjD8XHYNNQ3N2LDyM9RUV7OuDwSei+6pwFuNsyqAmC8Rqunv1A8p+3aLc/9y6Rqq65uxdd0alJddZHep/npeY/FS7FZiLT23KoC7p2oWIYgd7PogEqIjxPkKy6+jsq4Ju8I2obSkmF2orhC0mlW9EXvHAeSe6o9AaPjwRx9BbMSX4nxFl2tRcf0G4iIjUHjqJ5ZubhL4RPG63hrNqjug8FItpRRfjJE9ge2hIaK+M5V1KLvWCE1cDE7mHWdduwSem2MN8cyGVQHclaoVBAgyv9QqvVKPC1cbkKaJR+4RPZtTI/Dc9PsSQK5UsYRnOSt2QoJYnQ9crGnE2ao6ZKYlQ/+t+BdapsBzU+5LAIVStZUCCxRuExEU8EmHRgaRmpqGhAQNKJCr57kJ9yWAXOkbDRA/VmWxqxTzlnwwQyw5AfKrwGvG3qcAxn/ofbynwP+jjv/BRa2Z3+mxduMWFkbLBK2mo1q7XRCrOrFCqTpIAa93fKdi/gfv36SNlaCBq8SaoF7gOfFiwBrNqgByT1UWCBR+M9Twm3lzoDFdNVKgWs9zg6wh3uphVKFUeb/+ijzi0yULiy0JDArZNErIzvHS8ZoCawH8H2UzX21Vzh4lAAAAAElFTkSuQmCC',
			symbolSize:30,
		},
	],
}
export default options
