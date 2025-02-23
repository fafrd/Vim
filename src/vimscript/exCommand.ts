import { ErrorCode, VimError } from '../error';
import { VimState } from '../state/vimState';
import { LineRange } from './lineRange';

// TODO: Implement `:help :bar`
// TODO: Implement `:help :comment`
export abstract class ExCommand {
  /**
   * If this returns true and Neovim integration is enabled, we'll send this command to Neovim.
   */
  public neovimCapable(): boolean {
    return false;
  }

  abstract execute(vimState: VimState): Promise<void>;

  async executeWithRange(vimState: VimState, range: LineRange): Promise<void> {
    // By default, throw E481 ("No range allowed")
    throw VimError.fromCode(ErrorCode.NoRangeAllowed);
  }
}
