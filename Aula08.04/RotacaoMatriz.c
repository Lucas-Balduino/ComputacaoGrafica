#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#define PI 3.14159265
#define N 2
#define TETA (273.0 * PI / 180.0)

int main() {
    float A[N][N] = {
        {cos(TETA), -sin(TETA)},
        {sin(TETA),  cos(TETA)}
    };

    int numDePontos;
    float vet[N], vetResultado[N];
    int i, j, w;
    printf("Digite o número de pontos a rotacionar: ");
    scanf("%d", &numDePontos);

    for (w = 0; w < numDePontos; w++) {
        printf("\nPonto %d:\n", w + 1);
        printf("Digite o valor de X: ");
        scanf("%f", &vet[0]);
        printf("Digite o valor de Y: ");
        scanf("%f", &vet[1]);

        printf("Resultado da rotação:\n");
        for (i = 0; i < N; i++) {
            float soma = 0;
            for (j = 0; j < N; j++) {
                soma += A[i][j] * vet[j];
            }
            vetResultado[i] = soma;
            printf("%.2f\n", vetResultado[i]);
        }
    }

    return 0;
}
