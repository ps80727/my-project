<template>
	<div class="home-movie-item">
		<div class="img-background img-box">
			<img :src="info.cover.origin" alt="" width="100%">
		</div>

		<div class="info">
			<div class="left">
				<div class="title"> {{info.name}}</div>
				<div v-if = 'type === "now-playing"' class="desc">
					{{info.cinemaCount}}家影院上映  {{info.watchCount}}人观看
				</div>
			</div>
			<div class="right">
				<div v-if = 'type === "now-playing"' class="range">{{info.grade}}</div>
				<!-- vue.filter 管道符 -->
				<div v-else class="time">{{info.premiereAt | premiere}}上映</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name : 'HomeMovieItem',
		props : ['info', 'type']
	}
</script>
<style type="text/css" lang="scss" scoped>
	.home-movie-item {
        margin: 0 17px 17px 17px;
        background-color: #f9f9f9;
        -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
        -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
        box-shadow: 0.5px 0.5px 1px #a8a8a8;
        cursor: pointer;
        .img-box {
            height: 1.9181rem;
        }

        .info {
            padding: 13px;
            background: #fff;
            display: flex;justify-content: space-between;
            align-items: center;
        }

        .title {
            font-size: 12px;
            line-height: 15px;
        }
        .desc {
            font-size: 8px;
            color: #9a9a9a;
            line-height: 15px;
        }
        .range {
            color: #f78360;
            display: inline-block;
            float: right;
            margin-right: 15px;
            font-size: 18px;
        }
        .time {
                font-size: 10px;
                color: RGB(245, 162, 125);
                line-height: 15px;
        }
    }
</style>