import type { RenderContext } from '../types/RenderContext';
import type { Settings } from '../types/Settings';
import type {
    Widget,
    WidgetEditorDisplay,
    WidgetItem
} from '../types/Widget';

export class SessionIdWidget implements Widget {
    getDefaultColor(): string { return 'gray'; }
    getDescription(): string { return 'Shows Session ID'; }
    getDisplayName(): string { return 'Session ID'; }
    getEditorDisplay(item: WidgetItem): WidgetEditorDisplay {
        return { displayText: this.getDisplayName() };
    }

    render(item: WidgetItem, context: RenderContext, settings: Settings): string | null {
        if (context.isPreview) {
            return item.rawValue ? 'aa0d771d-ef8a-47e4-929f-05f5ee70717d' : 'Session ID: aa0d771d-ef8a-47e4-929f-05f5ee70717d';
        } else if (context.data?.session_id) {
            return item.rawValue ? context.data.session_id : `Session ID: ${context.data.session_id}`;
        }
        return null;
    }

    supportsRawValue(): boolean { return true; }
    supportsColors(item: WidgetItem): boolean { return true; }
}