export default function formatPrice(value: number): string {
    return Math.abs(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}
