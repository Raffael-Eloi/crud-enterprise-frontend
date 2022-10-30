<template>
    <HeaderComponent />
    <div class="body-margin">
        <b-row>
            <b-col md="3">
                <b-form-select v-model="table.filter" :options="filterOptions" placeholder="Filtro"></b-form-select>
            </b-col>
            <b-col md="1">
                <b-button variant="danger" @click="cleanFilter">
                    <i class="fa-solid fa-xmark"></i>
                </b-button>
            </b-col>
            <b-col md="4">
                <b-form-input v-model="table.keyword" type="text"></b-form-input>
            </b-col>
            <b-col md="1">
                <b-button variant="success" :disabled="disabledSearchButton()">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </b-button>
            </b-col>
            <b-col md="3">
                <b-button variant="success">
                    <router-link :to="{ name: 'create-enterprise' }">
                        <i class="fa-solid fa-plus me-3"></i>Cadastrar nova empresa
                    </router-link>
                </b-button>
            </b-col>
        </b-row>

        <br><br>

        <b-row>
            <b-col></b-col>
            <b-col>
                <h3>Lista de empresas</h3>
            </b-col>
            <b-col></b-col>
        </b-row>

        <br><br>
        
        <b-row>
            <b-col>
                <b-table-simple
              hover
              small
              caption-top
              responsive
              style="border-radius: 10px"
            >
              <b-thead head-variant="success">
                <b-tr>
                  <b-th class="text-center">Empresa</b-th>
                  <b-th class="text-center">CPF/CNPJ</b-th>
                  <b-th class="text-center">Contato</b-th>
                  <b-th class="text-center">Data de criação</b-th>
                  <b-th class="text-center">Ações</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr>
                  <b-td class="text-center"></b-td>
                  <b-td class="text-center"></b-td>
                  <b-td class="text-center"></b-td>
                  <b-td class="text-center"></b-td>
                  <b-td class="text-center">
                    <router-link :to="{ name: 'visualize-enterprise' }">
                        <i class="fa-solid fa-eye me-3 text-primary"></i>
                    </router-link>
                    <router-link :to="{ name: 'edit-enterprise' }">
                        <i
                        class="fa-solid fa-pencil me-3"
                        ></i>
                    </router-link>
                    <i
                      class="fa-solid fa-trash me-3 text-danger"
                      @click.prevent="deleteEnterprise()"
                    ></i>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import HeaderComponent from '@/components/shared/Header.vue'

export default {
    name: 'Enterprise',

    components: { HeaderComponent },

    data() {
        return {
            table: {
            },

            filterOptions: [
                {value: 'document', text: 'CPF/CNPJ'},
                {value: 'social-name', text: 'Razão social'},
                {value: 'fantasy-name', text: 'Nome fantasia'},
                {value: 'contact-name', text: 'Nome do contato'},
                {value: 'email', text: 'E-mail'},
            ]
        }
    },

    methods: {
        cleanFilter() {
            this.table.filter = null;
        },

        disabledSearchButton() {
            if (this.table.filter !== null && this.table.filter !== undefined) {
                if (this.table.keyword !== null && this.table.keyword !== undefined) {
                    return false;
                }
                return true;
            }
            return true;
        },

        deleteEnterprise() {
            this.$swal({
                title: "Você tem certeza que deseja excluir essa empresa?",
                text: "Não será possível recuperar!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#198754",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim, excluir",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                console.log("confirmou")
                } else {
                    console.log("cancelou")
                }
            });
        }
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