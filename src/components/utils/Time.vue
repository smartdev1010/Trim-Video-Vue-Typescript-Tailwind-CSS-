<script>
export default {
    props: {
        time: { type: Number },
    }
}
</script>
<template>
    <div>
        {{ parseInt(parseInt(this.time / 60) / 10) + "" + parseInt(this.time / 60) % 10 }}:
        {{ parseInt(parseInt(this.time) % 60 / 10) + "" + parseInt(this.time) % 60 % 10 }}:
        {{ parseInt(this.time * 10) % 10 }}
    </div>
    <div class="flex flex-col">
        <div class="inc mb-2 hover:cursor-pointer"></div>
        <div class="dec hover:cursor-pointer"></div>
    </div>
</template>
<style scoped>
.inc {
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgba(255, 255, 255, 0.5) transparent;
}
.inc:hover {
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent white transparent;
}
.dec {
    border-width: 5px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.5) transparent transparent transparent;
}
.dec:hover {
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent;
}


</style>