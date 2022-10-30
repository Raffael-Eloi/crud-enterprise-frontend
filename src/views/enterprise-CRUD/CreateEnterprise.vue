<template>
    <div class="body-margin">
        <b-card class="m-5">
            <b-card-title class="text-center">Cadastro de empresa</b-card-title>
        </b-card>

        <b-form>
            <b-row>
                <b-col md="4" sm="6">
                    <b-form-group label="Razão social/Nome" label-for="input-social-name"></b-form-group>
                    <b-form-input
                        id="input-social-name"
                        type="text"
                        v-model="form.inputs.social_name"
                        placeholder="Digite a razão social"
                        :state="form.errors.social_name ? !(form.errors.social_name !== undefined) : null"
                    >
                    </b-form-input>

                    <ul
                        class="text-danger"
                        v-for="(errorMessage, index) in form.errors.social_name"
                        :key="index"
                    >
                        <li class="fs-6">{{ errorMessage }}</li>
                    </ul>
                    <br>
                </b-col>
                <b-col md="4" sm="6">
                    <b-form-group label="CNPJ/CPF" label-for="input-document"></b-form-group>
                    <b-form-input
                        id="input-document"
                        type="text"
                        v-model="form.inputs.document"
                        placeholder="Digite o CNPJ/CPF"
                        :state="form.errors.document ? !(form.errors.document !== undefined) : null"
                    >
                    </b-form-input>

                    <ul
                        class="text-danger"
                        v-for="(errorMessage, index) in form.errors.document"
                        :key="index"
                    >
                        <li class="fs-6">{{ errorMessage }}</li>
                    </ul>
                    <br>
                </b-col>
                <b-col md="4" sm="6">
                    <b-form-group label="Nome fantasia" label-for="input-fantasy_name"></b-form-group>
                    <b-form-input
                        id="input-fantasy_name"
                        type="text"
                        v-model="form.inputs.fantasy_name"
                        placeholder="Digite o nome fantasia"
                        :state="form.errors.fantasy_name ? !(form.errors.fantasy_name !== undefined) : null"
                    >
                    </b-form-input>

                    <ul
                        class="text-danger"
                        v-for="(errorMessage, index) in form.errors.fantasy_name"
                        :key="index"
                    >
                        <li class="fs-6">{{ errorMessage }}</li>
                    </ul>
                    <br>
                </b-col>
            </b-row>
            
            <b-row>
                <b-col md="4" sm="6">
                    <b-form-group label="Produto/Serviço" label-for="input-product_service"></b-form-group>
                    <b-form-input
                        id="input-product_service"
                        type="text"
                        v-model="form.inputs.product_service"
                        placeholder="Digite o produto ou serviço"
                        :state="form.errors.product_service ? !(form.errors.product_service !== undefined) : null"
                    >
                    </b-form-input>

                    <ul
                        class="text-danger"
                        v-for="(errorMessage, index) in form.errors.product_service"
                        :key="index"
                    >
                        <li class="fs-6">{{ errorMessage }}</li>
                    </ul>
                    <br>
                </b-col>
                <b-col md="4" sm="6">
                    <b-form-group label="Nome do contato" label-for="input-contact_name"></b-form-group>
                    <b-form-input
                        id="input-contact_name"
                        type="text"
                        v-model="form.inputs.contact_name"
                        placeholder="Digite o nome do contato"
                        :state="form.errors.contact_name ? !(form.errors.contact_name !== undefined) : null"
                    >
                    </b-form-input>

                    <ul
                        class="text-danger"
                        v-for="(errorMessage, index) in form.errors.contact_name"
                        :key="index"
                    >
                        <li class="fs-6">{{ errorMessage }}</li>
                    </ul>
                    <br>
                </b-col>
                <b-col md="4" sm="6">
                    <b-form-group label="Telefone de contato" label-for="input-phone"></b-form-group>
                    <b-form-input
                        id="input-phone"
                        type="text"
                        v-model="form.inputs.phone"
                        placeholder="Digite o telefone de contato"
                        :state="form.errors.phone ? !(form.errors.phone !== undefined) : null"
                    >
                    </b-form-input>

                    <ul
                        class="text-danger"
                        v-for="(errorMessage, index) in form.errors.phone"
                        :key="index"
                    >
                        <li class="fs-6">{{ errorMessage }}</li>
                    </ul>
                    <br>
                </b-col>
            </b-row>
            
            <b-row>
                <b-col md="4" sm="6">
                    <b-form-group label="E-mail" label-for="input-email"></b-form-group>
                    <b-form-input
                        id="input-email"
                        type="text"
                        v-model="form.inputs.email"
                        placeholder="Digite o email"
                        :state="form.errors.email ? !(form.errors.email !== undefined) : null"
                    >
                    </b-form-input>

                    <ul
                        class="text-danger"
                        v-for="(errorMessage, index) in form.errors.email"
                        :key="index"
                    >
                        <li class="fs-6">{{ errorMessage }}</li>
                    </ul>
                    <br>
                </b-col>
                <b-col md="4" sm="6">
                    <b-form-group label="Cidade" label-for="input-city"></b-form-group>
                    <b-form-input
                        id="input-city"
                        type="text"
                        v-model="form.inputs.city"
                        placeholder="Digite a cidade"
                        :state="form.errors.city ? !(form.errors.city !== undefined) : null"
                    >
                    </b-form-input>

                    <ul
                        class="text-danger"
                        v-for="(errorMessage, index) in form.errors.city"
                        :key="index"
                    >
                        <li class="fs-6">{{ errorMessage }}</li>
                    </ul>
                    <br>
                </b-col>
                <b-col md="4" sm="6">
                    <b-form-group label="Estado" label-for="input-state"></b-form-group>
                    <b-form-select
                        id="input-state"
                        v-model="form.inputs.state"
                        :options="select.statesList"
                    >
                    </b-form-select>

                    <ul
                        class="text-danger"
                        v-for="(errorMessage, index) in form.errors.state"
                        :key="index"
                    >
                        <li class="fs-6">{{ errorMessage }}</li>
                    </ul>
                    <br>
                </b-col>
            </b-row>

            <div class="text-center" v-if="form.loading">
                <b-spinner variant="secondary" class="m-5"></b-spinner>
            </div>

            <b-row class="mt-5">
                <b-col class="d-flex justify-content-center">
                <b-button
                    type="button"
                    variant="danger"
                    @click.prevent="close"
                    :disabled="form.loading"
                >
                    <router-link :to="{ name: 'enterprise' }">
                        Cancelar <i class="fa-solid fa-xmark"></i>
                    </router-link>
                </b-button>
                </b-col>

                <b-col class="d-flex justify-content-center">
                <b-button
                    type="submit"
                    variant="success"
                    @click.prevent="storeEnterprise()"
                    :disabled="form.loading"
                >
                    Cadastrar <i class="fa-solid fa-floppy-disk"></i>
                </b-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>

<script>
import { states } from "../../assets/utilities/brazilianStates.js";
export default {
    name: 'CreateEnterprise',

    data() {
        return {
            form: {
                loading: false,
                inputs: {},
                errors: {},
            },

            select: {
                statesList: states
            }
        }
    },

    methods: {
        
    }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

a:active {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
</style>