Page({
  data: {
    latitude: 32.059352,
    longitude: 118.796623,
    markers: [
      {
        id: 1,
        latitude: 32.023372,
        longitude: 118.815931,
        name: '光华门',
        iconPath: '../../img/gate.png',
        width: '30',
        height: '30',
        callout: {
          content: '光华门: \n 明称正阳门，光华门是京城的正门， \n 位于南京御道街最南端。光华门是内外均 \n 位于为瓮城的复合型瓮城，对城内城外 \n 有双重防御作用，是中国城墙建造史上独创。',
          color: '#000000',
          fontSize: 15,
          borderRadius: 20,
          display: 'BYCLICK',
          bgColor: '#FFFCEC',
          padding: 10
        }
      },
      {
        id: 2,
        latitude: 32.012776,
        longitude: 118.781807,
        name: '中华门',
        iconPath: '../../img/gate.png',
        width: '30',
        height: '30',
        callout: {
          content: '中华门·现存 \n 原名聚宝门，是中国现存规模最大的城门， \n 也是世界上保存最完好、结构最复杂 \n 的堡垒瓮城，其建筑规模仅次于通济门 \n 有“天下第一瓮城”之称。',
          color: '#000000',
          fontSize: 15,
          borderRadius: 20,
          display: 'BYCLICK',
          bgColor: '#FFFCEC',
          padding: 10
        }
      },
      {
        id: 3,
        latitude: 32.025654,
        longitude: 118.801239,
        name: '通济门',
        iconPath: '../../img/gate.png',
        width: '30',
        height: '30',
        callout: {
          content: '通济门： \n 明初由原集庆路旧东门截城壕增建， \n 扼守于内外秦淮分界，门向东北为皇 \n 城，向西南则是商业区，为南京咽喉所在，\n 是中国规模最大的瓮城城门。',
          color: '#000000',
          fontSize: 15,
          borderRadius: 20,
          display: 'BYCLICK',
          bgColor: '#FFFCEC',
          padding: 10
        }
      },
      {
        id: 4,
        latitude: 32.035982,
        longitude: 118.742094,
        name: '三山门',
        iconPath: '../../img/gate.png',
        width: '30',
        height: '30',
        callout: {
          content: '三山门： \n 历史上为水陆两栖城门，面临秦淮河， \n 是旧日从水路进出南京城的主要通道.',
          color: '#000000',
          fontSize: 15,
          borderRadius: 20,
          display: 'BYCLICK',
          bgColor: '#FFFCEC',
          padding: 10
        }
        
      },
      {
        id: 5,
        latitude: 32.057934,
        longitude: 118.812958,
        name: '太平门',
        iconPath: '../../img/gate.png',
        width: '30',
        height: '30',
        callout: {
          content: '太平门 \n 因城门外为天牢所在，时常传出囚犯的哀 \n 呼之声，希望城内太平和谐，故取名“太平门”。',
          color: '#000000',
          fontSize: 15,
          borderRadius: 20,
          display: 'BYCLICK',
          bgColor: '#FFFCEC',
          padding: 10}
      },
      {
        id: 6,
        latitude: 32.046425,
        longitude: 118.744211,
        name: '清凉门',
        iconPath: '../../img/gate.png',
        width: '30',
        height: '30',
        callout: {
          content: '清凉门·现存 \n 因坐落在清凉山得名，现由一道城门和一圈椭 \n 圆形瓮构成，主城门为单孔拱券结构，\n 城顶上存留一块绞关石，上凿有两个绞孔.',
          color: '#000000',
          fontSize: 15,
          borderRadius: 20,
          display: 'BYCLICK',
          bgColor: '#FFFCEC',
          padding: 10
        }
      },
      {
        id: 7,
        latitude: 32.069176,
        longitude: 118.750366,
        name: '定淮门',
        iconPath: '../../img/gate.png',
        width: '30',
        height: '30',
        callout: {
          content: '定淮门',
          color: '#000000',
          fontSize: 15,
          borderRadius: 20,
          display: 'BYCLICK',
          bgColor: '#FFFCEC',
          padding: 10
        }
      },
      {
        id: 8,
        latitude: 32.042784,
        longitude: 118.766962,
        name: '汉中门',
        iconPath: '../../img/gate.png',
        width: '30',
        height: '30',
        callout: {
          content: '汉中门·现存 \n ',
          color: '#000000',
          fontSize: 15,
          borderRadius: 20,
          display: 'BYCLICK',
          bgColor: '#FFFCEC',
          padding: 10
        }
      },
      {
        id: 9,
        latitude: 32.091586,
        longitude: 118.747563,
        name: '仪凤门',
        iconPath: '../../img/gate.png',
        width: '30',
        height: '30',
        callout: {
          content: '仪凤门 \n 旧时南京城北通往长江要道，处于钟 \n 阜门与挹江门之间，军事位置十分重要。',
          color: '#000000',
          fontSize: 15,
          borderRadius: 20,
          display: 'BYCLICK',
          bgColor: '#FFFCEC',
          padding: 10}
      },
      {
        id: 10,
        latitude: 32.081775,
        longitude: 118.762321,
        name: '钟阜门',
        iconPath: '../../img/gate.png',
        width: '30',
        height: '30',
        callout: {
          content: '钟阜门',
          color: '#000000',
          fontSize: 15,
          borderRadius: 20,
          display: 'BYCLICK',
          bgColor: '#FFFCEC',
          padding: 10
        }
      },
      {
        id: 12,
        latitude: 32.088915,
        longitude: 118.787345,
        name: '神策门',
        iconPath: '../../img/gate.png',
        width: '30',
        height: '30',
        callout: {
          content: '神策门·现存 \n 是南京明城墙保存最为完整的一座也是所有城， \n 门中唯一保留有民国以前镝楼的城门。',
          color: '#000000',
          fontSize: 15,
          borderRadius: 20,
          display: 'BYCLICK',
          bgColor: '#FFFCEC',
          padding: 10
        }
      },
      {
        id: 13,
        latitude: 32.038744,
        longitude: 118.827347,
        name: '中山门',
        iconPath: '../../img/gate.png',
        width: '30',
        height: '30',
        callout: {
          content: '中山门 \n 旧称朝阳门，此门是瓮城连接城内的宫城 \n 和城外的明孝陵的通道。',
          color: '#000000',
          fontSize: 15,
          borderRadius: 20,
          display: 'BYCLICK',
          bgColor: '#FFFCEC',
          padding: 10
        }
      }
    ],
    covers: [

    ]
  },
  onReady: function (e) {
    var that = this;
    this.mapCtx = wx.createMapContext('myMap')

  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  jumpBtn:function(e){
    wx.navigateTo({
      url: '../story/story',
    })
  }
  ,
  markertap: function (e) {
    var that = this;
    var id = e.id;
    that.showSearchInfo(data, id);
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [5],
      points: [{
        latitude: 32.091586,
        longitude: 118.747563,
      },
      {
        latitude: 32.023372,
        longitude: 118.815931,
      }]
    })
  },
  showSearchInfo: function (data, i) {
    var that = this;
    that.setData({
      rgcData: {
        address: '地址：' + data[i].latitude + data[i].longitude + '\n',
        desc: '地名：' + data[i].name + '\n',
      }
    });
  }
})
