<template>
        <button :class="color">
            <slot></slot>
        </button>
</template>

<script>
export default{
    name:"ButtonApp",
    props:{
        color:{
            type: String,
            default: 'primary'

        }
    }
}
</script>


<style lang='less' scoped>
button{
    display: flex;
    padding: 10px 15px;
    border: none;
    outline:none;
    border-radius: 10px;
    color:white;
    font-weight: bold;
    align-items: center;
    margin: 10px;
    i{
        margin-right: 10px;
    }
    &.primary{
        background-color: rgba(70,208,218);
    }


}


</style>