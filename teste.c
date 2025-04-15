#include <stdlib.h>
#include <stdio.h>

int A[5][5] = {
    {1,2,3,4,5,},
    {1,2,3,4,5,},
    {1,2,3,4,5,},
    {1,2,3,4,5,},
    {1,2,3,4,5,},
};

int vet[5] = {1,2,3,4,5,};

int vetResultado [5];
int soma,i,j;
int main(){
    for (i = 0; i < 5; i++)
    {
        soma = 0;
        for (j = 0; j < 5; j++)
        {
            soma += A[i][j] * vet[j];
        }
        vetResultado[i] = soma;
        printf("%d\n", soma);
    }
    
}
