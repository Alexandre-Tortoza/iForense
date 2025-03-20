/* Tanto no catch da reques quanto
 * na validação do status da response
 * eu colocaria dependendo da APi
 * um feedback para o usuário com um
 * componente ou usando uma lib de toast
 */

import apiClient from "@/service/_apiClient.js";
import { ref } from "vue";

export let isLoading = ref(false);

export async function getAllPosts() {
  isLoading.value = true;
  let response = null;

  try {
    response = await apiClient.get("/posts");
  } catch (error) {
    /**
     * Esse trecho foi adicionado depois da entrega
     */
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          console.error("Erro 400: Requisição inválida.");
          break;
        case 404:
          console.error("Erro 404: Posts não encontrados.");
          break;
        case 500:
          console.error("Erro 500: Erro interno do servidor.");
          break;
        default:
          console.error(`Erro ${status}: Problema inesperado na requisição.`);
      }
    } else if (error.request) {
      console.error("Erro de rede: Sem conexão com o servidor.");
    } else {
      console.error("Erro desconhecido:", error.message);
    }

    /**
     * Essa parte poderia ser um Toast para o usuário
     * para facilitar poderia usar uma lib como
     * Notiflix ou SWAL2
     */
    return null;
  } finally {
    /* Vou adicionar um setTimeout para
     * simular um delay de 1 segundo, se não
     * ele aparece e some muito rapido
     */
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }

  if (response.status !== 200) {
    return null;
  }

  return response.data;
}
