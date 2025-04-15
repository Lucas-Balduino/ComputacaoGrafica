#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#define PI 3.14159265
#define N 2
#define TETA (90 * PI / 180.0)

int main() {
    int numDePontos;
    float vet[N], vetResultado[N], pontoRotacao[N];
    int i, j, w, z;
    float teta;

    printf("Digite o ponto de eixo de rotacao:\n");
    printf("Digite o valor de X: ");
    scanf("%f", &pontoRotacao[0]);
    printf("Digite o valor de Y: ");
    scanf("%f", &pontoRotacao[1]);

    printf("\nDigite quantos graus o ponto vai ser rotacionado:");
    scanf("%f", &teta);

    teta = (teta * PI / 180);

    float A[N][N] = {
        {cos(teta), -sin(teta)},
        {sin(teta),  cos(teta)}
    };

    printf("\nDigite o numero de pontos a rotacionar: ");
    scanf("%d", &numDePontos);
    
    printf("\nDigite as coordenadas dos pontos:\n");

    for (w = 0; w < numDePontos; w++) {
        printf("\nPonto %d:\n", w + 1);
        printf("Digite o valor de X: ");
        scanf("%f", &vet[0]);
        printf("Digite o valor de Y: ");
        scanf("%f", &vet[1]);

        printf("\nCoordenada Original Ponto %d:\n", w + 1);
        printf("\nPonto %d: (%.2f,%.2f)\n", w + 1,vet[0],vet[1]);
        
        for (z = 0; z < 2; z++){
            vet[z] -= pontoRotacao[z];
        }
        
        printf("\nResultado da rotacao:\n");
        for (i = 0; i < N; i++) {
            float soma = 0;
            for (j = 0; j < N; j++) {
                soma += A[i][j] * vet[j];
            }
            vetResultado[i] = soma;
        }

        for (z = 0; z < 2; z++){
            vetResultado[z] += pontoRotacao[z];
        }

        printf("\nCoordenada Nova do Ponto %d:\n", w + 1);
        printf("\nPonto %d: (%.2f,%.2f)\n", w + 1,vetResultado[0],vetResultado[1]);
    }

    return 0;
}
