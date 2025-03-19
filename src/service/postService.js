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
    // console.error('Erro na Request "/posts" ',error);
    console.error(error);
  } finally {
    /* Vou adicionar um setTimeout para
     * simular um delay de 1 segundo
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
