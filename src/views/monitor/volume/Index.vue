<template>
  <div class="app-container">
    <el-card class="box-card">
      
      <el-form :model="queryParams" ref="queryForm" :inline="true">

        <el-form-item>
            <el-select size="mini" v-model="queryParams.dayType" placeholder="请选择指标类型">
                <el-option key="1"  value="1" label="3日均成交量"></el-option>
                <el-option key="2"  value="2" label="5日均成交量"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="比例">
            <el-input-number size="mini" v-model="queryParams.multiple" :precision="2" :step="0.1" :max="10"></el-input-number>
        </el-form-item>

        <el-form-item>
          <el-button size="mini" icon="el-icon-refresh" @click="getList">查询</el-button>
        </el-form-item>
      </el-form>

      <el-table v-loading="loading" :data="dataList" size="mini" stripe="true" border="true">
        <el-table-column label="股票代码" align="left" prop="base_info.ts_code" />
        <el-table-column label="股票名称" align="left" prop="base_info.name" />
        <el-table-column label="当前价" align="left" prop="avg.current_price" />
        <el-table-column label="涨跌幅" align="left" prop="avg.pct_chg" />
        <el-table-column label="换手率" align="left" prop="avg.pct_chg" />
        <el-table-column label="当前市值" align="left" prop="daily.amount" />
        <el-table-column label="成交量" align="left" prop="avg.current_vol" />
        <el-table-column label="3日均成交量" show-overflow-tooltip="true" align="left" prop="avg.avg_three" />
        <el-table-column label="5日均成交量" show-overflow-tooltip="true" align="left" prop="avg.avg_five" />
      </el-table>

    </el-card>
  </div>
</template>

<script>
import { queryAmplifyVol } from '@/api/stock'

export default {
  name: 'VolumeMonitor',
  data() {
    return {
      // 遮罩层
      loading: false,
      // 总条数
      total: 0,
      // 查询参数
      queryParams: {
        dayType: "1",
        multiple: 2,
      },
      dataList: [],
      orderStatusOptions: [],
      bizYesNoOptions: [],
      customColors: [
        {color: '#909399', percentage: 70},
        {color: '#E6A23C', percentage: 90},
        {color: '#67C23A', percentage: 100}
      ],
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      queryAmplifyVol(this.queryParams).then(response => {
        this.dataList = response.data;
        this.loading = false;
      });
    },
  }
}
</script>
