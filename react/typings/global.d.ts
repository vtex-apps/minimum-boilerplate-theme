export interface TimeSplit {
    hours: string
    minutes: string
    seconds: string
}

type GenericObject = Record<string, any>

interface ProductContextState {
  selectedItem?: Item | null
  product: MaybeProduct
  selectedQuantity: number
  skuSelector: {
    selectedImageVariationSKU: string | null
    isVisible: boolean
    areAllVariationsSelected: boolean
  }
  buyButton: BuyButtonContextState
  assemblyOptions: {
    items: Record<GroupId, AssemblyOptionItem[]>
    inputValues: Record<GroupId, InputValues>
    areGroupsValid: Record<GroupId, boolean>
  }
}
