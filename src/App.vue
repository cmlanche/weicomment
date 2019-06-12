<template>
  <div v-if="enabled">
    <div class="weicomment-container" v-view="viewHandler">
      <div v-if="!(comments.length > 0)" class="spinner">
        <div class="cube1"></div>
        <div class="cube2"></div>
      </div>
      <div class="list" v-else>
        <div class="header">
          评论 <span class="count">{{comments.length}}</span>
          <a class="weibo-link" target="_black" :href="'https://m.weibo.cn/detail/' + weiboId">
            去评论 >
          </a>
        </div>
        <div class="comment-item" :key="item.id" v-for="item in comments">
          <img class="profile" :src="item.user.profile_image_url">
          <span class="nickname">
            {{item.user.screen_name}}
          </span>
          <span class="time">
            {{item.created_at}}
          </span>
          <div class="text" v-html="item.text">
          </div>
        </div>
        <div class="footer">
          <a href="https://github.com/xcodebuild/weicomment" target="_black">Powered By @WeiComment</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import dayjs from 'dayjs';
// eslint-disable-next-line

export default {
  name: 'app',
  data: () => {
    return {
      rendered: false,
      commentsData: [],
      weiboId: null,
      enabled: true,
    }
  },
  computed: {
    comments() {
      return this.commentsData.map(item => {
        return {
          ...item,
          created_at: dayjs(item.created_at).format('YYYY-MM-DD HH:mm:ss')
        }
      });
    }
  },
  components: {
  },
  methods: {
    async viewHandler() {
      if (!this.rendered) {
        this.rendered = true;
        
        let weiCommentId;
        try {
          weiCommentId = JSON.parse(decodeURIComponent(location.hash.slice(1))).id;
        } catch (e) {
          // pass
        }

        if (weiCommentId) {
          this.weiboId = weiCommentId;

          const weiboAPI = `https://m.weibo.cn/comments/hotflow?id=${weiCommentId}&mid=${weiCommentId}&max_id_type=0`;
          const res = await fetch(`https://cors-anywhere.herokuapp.com/${weiboAPI}`);
          const json = await res.json();
          this.commentsData = json.data.data;
        } else {
          this.enabled = false;
        }

      }
    }
  }
}
</script>

<style lang="less" scoped>
.weicomment-container {
  padding: 10px 20px;
  position: relative;

  .list {
  }

  .comment-item {
    border-top: 1px solid #DEDEDE;
    padding: 15px 0px;
  }
  .profile {
    width: 20px;
    vertical-align: middle;
  }
  .nickname {
    font-size: 14px;
    vertical-align: middle;
    font-weight: bold;
  }
  .text {
    font-size: 16px;
    line-height: 24px;
    padding: 10px 0px;
  }
  .time {
    color: gray;
    font-size: 12px;
  }

  .footer {
    border-top: 1px solid #DEDEDE;
    
    text-align: right;

    a {
      color: gray;
    }
  }

  .header {
    font-size: 16px;
    margin-bottom: 5px;
    position: relative;

    .count {
      margin-left: 2px;
    }

    .weibo-link {
      color: #e6152d;
      position: absolute;
      right: 10px;
    }
  }
}

.spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}

.cube1, .cube2 {
  background-color: #333;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
  animation: sk-cubemove 1.8s infinite ease-in-out;
}

.cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes sk-cubemove {
  25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
  50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
  75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
  100% { -webkit-transform: rotate(-360deg) }
}

@keyframes sk-cubemove {
  25% { 
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  } 50% { 
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  } 50.1% { 
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  } 100% { 
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}

</style>
