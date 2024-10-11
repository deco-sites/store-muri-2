import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  image?: ImageWidget;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  borderColor?: string;
  borderWidth?: number;
}

export default function Rectangle({
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  backgroundColor = "#ffffff",
  borderColor = "#000000",
  borderWidth = 1
}: Props) {
  return (
    <div class="flex justify-center items-center p-4">
      <div 
        class="w-48 h-40 relative"
        style={{
          backgroundColor,
          borderColor,
          borderWidth: `${borderWidth}px`,
          borderStyle: 'solid'
        }}
      >
        <img 
          src={image} 
          alt="Rectangle content"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}