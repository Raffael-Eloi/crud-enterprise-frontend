<template>
    <HeaderComponent />
    <div class="body-margin">
        <b-row>
            <b-col>Filtro</b-col>
            <b-col>
                <b-form-input v-model="selectedText" type="text"></b-form-input>
            </b-col>
            <b-col>
                <b-button variant="success">
                    <i class="fa-solid fa-plus me-3"></i>Cadastrar nova empresa
                </b-button>
            </b-col>
        </b-row>

        <br><br>

        <b-row>
            <b-col></b-col>
            <b-col>
                <h3>Lista de empresas cadastradas</h3>
            </b-col>
            <b-col></b-col>
        </b-row>

        <br><br>
        
        <b-row>
            <b-col></b-col>
            <b-col>a</b-col>
            <b-col></b-col>
        </b-row>
    </div>
</template>

<script>
import HeaderComponent from '@/components/shared/Header.vue'

export default {
    name: 'Enterprise',

    components: { HeaderComponent }
}
</script>

<style scoped>

</style>