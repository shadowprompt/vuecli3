<template>
  <el-upload
    v-if=""
    ref="elUpload"
    class="unex-uploader"
    :action="uploadUrl"
    :auto-upload="displayType === 'plus'"
    :drag="displayType === 'plus'"
    :data="data"
    :with-credentials="false"
    :file-list="fileList"
    :on-success="successHandler"
    :on-error="errorHandler"
    :before-upload="beforeImageUpload"
    :multiple="false"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-change="handleChange"
    :accept="accept"
  >
    <template v-if="displayType === 'plus'">
      <unex-icon svg="add"></unex-icon>
      <div class="el-upload__text">{{ $t("pim.click_upload") }}</div>
    </template>
    <template v-else>
      <el-button
        size="small"
        class="selectBtn"
        plain
        slot="trigger"
        @click="handleClick"
        >{{ $t("pim.select_file") }}
      </el-button>
      <el-button type="primary" size="small" @click="submit">{{
        $t("pim.upload")
      }}</el-button>
      <slot name="tip" slot="tip" class="el-upload__tip"></slot>
    </template>
  </el-upload>
</template>

<script>
export default {
  name: "unexUploader",
  props: {
    uploadUrl: {
      type: String
    },
    allowTypes: {
      type: Array,
      default: () => []
    },
    limitSize: {
      type: Number,
      default: 5 // 默认允许5M
    },
    operationType: {
      type: Number,
      default: 13
    },
    displayType: {
      type: String,
      default: "plus"
    },
    aliyun: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object
    },
    accept: {
      type: String,
      default: ".jpg,.png,.gif,.bmp"
    }
  },
  data() {
    return {
      fileList: [],
      actions: this.uploadUrl,
      authInfo: {}
    };
  },
  methods: {
    handleClick(event) {
      console.log("click -> ", 9, event, this.$refs.elUpload);
      const { fileList } = this.$refs.elUpload.$refs["upload-inner"];
      const hasReady = fileList.some(item => item.status === "ready");
      if (hasReady) {
        console.log("分批上传");
        // event.stopPropagation();
      }
    },
    submit() {
      const { fileList } = this.$refs.elUpload.$refs["upload-inner"];
      const hasReady = fileList.some(item => item.status === "ready");
      if (!hasReady) {
        this.$message({
          duration: 2000,
          message: this.$t("pim.pleasehold_upload_file"),
          type: "error"
        });
        return;
      }
      this.$refs.elUpload.submit();
    },
    handleChange(file, fileList) {
      console.log(file, fileList);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    successHandler(...args) {
      this.$emit("on-success", args);
    },
    errorHandler(...args) {
      this.$emit("on-error", args);
      this.$message({
        customClass: "cms-message-notice",
        duration: 1000,
        message: this.$t("pim.upload_error"),
        type: "error"
      });
    },
    beforeImageUpload(file) {
      const fileSuffix = "." + file.name.split(".").pop();
      const isTypeAllowed = this.accept.split(",").includes(fileSuffix);
      if (!isTypeAllowed && this.accept === ".zip") {
        this.$message({
          customClass: "cms-message-notice",
          duration: 1000,
          message: this.$t("pim.upload_is_not_zip"),
          type: "warning"
        });
        return false;
      }
      // 阿里云参数
      if (this.data && this.aliyun) {
        this.data.name = file.name;
        this.data.key = this.data.dir + file.name;
      }

      const isSizeAllowed = file.size / 1024 / 1024 < this.limitSize;
      if (!isSizeAllowed) {
        this.$message({
          customClass: "cms-message-notice",
          duration: 1000,
          message: this.$t("pim.upload_picture_size"),
          type: "error"
        });
        return false;
      }
      return true;
    }
  }
};
</script>
