import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import './Buttons.css';

function Buttons({sel, handleButtonFilter}) {

  const isActive = (val) => {
    return ((val===sel) ? 'contained' : 'outlined');
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button className='shape-btn' variant={isActive('Widebody')} onClick={()=>{handleButtonFilter('Square')}}>
          <div className='shape-icon'>
            <svg width="30" height="100" viewBox="0 0 348 726" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_49_2)">
            <path d="M73 448.843C83.2222 453.315 119 471.587 142 517.603" stroke="black" strokeWidth="7"/>
            <path d="M275 448.843C264.778 453.315 229 471.587 206 517.603" stroke="black" strokeWidth="7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M196.81 674.902L196.721 674.412L196.721 666.666L196.721 661.672L196.721 555.281L149.721 555.281L149.721 664.943L149.721 666.666L149.721 674.438L149.647 674.866C149.642 674.894 149.638 674.923 149.636 674.951L144.039 674.469L149.636 674.951L145.936 717.914C145.886 718.498 146.346 719 146.932 719L200.342 719C200.935 719 201.398 718.486 201.336 717.895L196.82 674.974L196.82 674.974C196.819 674.965 196.818 674.955 196.816 674.946C196.814 674.932 196.812 674.917 196.81 674.902ZM142.721 673.66L142.721 666.666L142.721 555.281L142.721 548.281L149.721 548.281L196.721 548.281L203.721 548.281L203.721 555.281L203.721 666.666L203.721 673.662L203.721 673.666L203.699 673.666C203.707 673.708 203.714 673.751 203.721 673.794C203.746 673.943 203.766 674.092 203.781 674.242L204.457 680.666L208.298 717.163C208.795 721.886 205.091 726 200.342 726L146.932 726C142.243 726 138.559 721.985 138.962 717.314L142.118 680.666L142.662 674.351C142.676 674.182 142.696 674.013 142.721 673.845C142.731 673.785 142.74 673.725 142.751 673.666L142.721 673.666L142.721 673.66Z" fill="black"/>
            <rect x="3.5" y="452.748" width="363.248" height="341" rx="76.5" transform="rotate(-90 3.5 452.748)" fill="black" stroke="black" strokeWidth="7"/>
            <path d="M73 448.843C83.2222 453.315 119 471.587 142 517.603" stroke="black" strokeWidth="7"/>
            <path d="M275 448.843C264.778 453.315 229 471.587 206 517.603" stroke="black" strokeWidth="7"/>
            <rect x="136.5" y="549.012" width="34.2562" height="73" rx="3.5" transform="rotate(-90 136.5 549.012)" fill="black" stroke="black" strokeWidth="7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M196.81 674.902L196.721 674.412L196.721 666.666L196.721 661.672L196.721 555.281L149.721 555.281L149.721 664.943L149.721 666.666L149.721 674.438L149.647 674.866C149.642 674.894 149.638 674.923 149.636 674.951L144.039 674.469L149.636 674.951L145.936 717.914C145.886 718.498 146.346 719 146.932 719L200.342 719C200.935 719 201.398 718.486 201.336 717.895L196.82 674.974L196.82 674.974C196.819 674.965 196.818 674.955 196.816 674.946C196.814 674.932 196.812 674.917 196.81 674.902ZM142.721 673.66L142.721 666.666L142.721 555.281L142.721 548.281L149.721 548.281L196.721 548.281L203.721 548.281L203.721 555.281L203.721 666.666L203.721 673.662L203.721 673.666L203.699 673.666C203.707 673.708 203.714 673.751 203.721 673.794C203.746 673.943 203.766 674.092 203.781 674.242L204.457 680.666L208.298 717.163C208.795 721.886 205.091 726 200.342 726L146.932 726C142.243 726 138.559 721.985 138.962 717.314L142.118 680.666L142.662 674.351C142.676 674.182 142.696 674.013 142.721 673.845C142.731 673.785 142.74 673.725 142.751 673.666L142.721 673.666L142.721 673.66Z" fill="black"/>
            <path d="M143.5 517.603C141.1 499.831 102.833 464.711 84 449.372L261.5 452.545C241.9 467.355 213 502.088 201 517.603L200 674.694L205.5 717.537L202.5 721.769L146.5 722.826L143.5 718.595L147.5 676.81C147.167 631.146 145.9 535.375 143.5 517.603Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_49_2">
            <rect width="726" height="348" fill="white" transform="translate(0 726) rotate(-90)"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <div className='shape-title'>Square</div>
        </Button>
        <Button className='shape-btn' variant={isActive('Hybrid')} onClick={()=>{handleButtonFilter('Standard')}}>
          <div className='shape-icon'>
            <svg width="30" height="100" viewBox="0 0 348 726" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_49_29)">
            <path d="M34.4722 423.119C121.984 484.95 139.2 508.119 136.869 511.975C151.021 524.068 184.82 540.998 206.798 511.975C234.27 475.696 281.723 443.098 303.201 423.119C320.383 407.135 324.679 384.211 324.679 374.747C330.84 313.056 342.161 180.735 338.165 144.982C334.17 109.229 313.191 90.4767 303.201 85.5694C167.338 -18.5345 49.4571 75.5797 34.4722 85.5694C22.4844 93.5613 7 123.425 7 144.982C9.33098 214.034 14.2926 356.66 15.4914 374.747C16.6902 392.834 28.6448 414.531 34.4722 423.119Z" fill="black" stroke="black"/>
            <path d="M73 444.843C83.2222 449.315 119 467.587 142 513.603" stroke="black" strokeWidth="7"/>
            <path d="M275 444.843C264.778 449.315 229 467.587 206 513.603" stroke="black" strokeWidth="7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M196.81 670.902L196.721 670.412L196.721 662.666L196.721 657.672L196.721 551.281L149.721 551.281L149.721 660.943L149.721 662.666L149.721 670.438L149.647 670.866C149.642 670.894 149.638 670.923 149.636 670.951L145.936 713.914C145.886 714.498 146.346 715 146.932 715L200.342 715C200.935 715 201.398 714.486 201.336 713.895L196.82 670.974L196.82 670.974C196.817 670.95 196.814 670.926 196.81 670.902ZM142.721 669.66L142.721 662.666L142.721 551.281L142.721 544.281L149.721 544.281L196.721 544.281L203.721 544.281L203.721 551.281L203.721 662.666L203.721 669.662L203.721 669.666L203.699 669.666C203.707 669.708 203.714 669.751 203.721 669.794C203.746 669.943 203.766 670.092 203.781 670.242L204.457 676.666L208.298 713.163C208.795 717.886 205.091 722 200.342 722L146.932 722C142.243 722 138.559 717.985 138.962 713.314L142.118 676.666L142.662 670.351C142.676 670.182 142.696 670.013 142.721 669.845C142.731 669.785 142.74 669.725 142.751 669.666L142.721 669.666L142.721 669.66Z" fill="black"/>
            <path d="M73 444.843C83.2222 449.315 119 467.587 142 513.603" stroke="black" strokeWidth="7"/>
            <path d="M275 444.843C264.778 449.315 229 467.587 206 513.603" stroke="black" strokeWidth="7"/>
            <rect x="136.5" y="545.012" width="34.2562" height="73" rx="3.5" transform="rotate(-90 136.5 545.012)" fill="black" stroke="black" strokeWidth="7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M196.81 670.902L196.721 670.412L196.721 662.666L196.721 657.672L196.721 551.281L149.721 551.281L149.721 660.943L149.721 662.666L149.721 670.438L149.647 670.866C149.642 670.894 149.638 670.923 149.636 670.951L145.936 713.914C145.886 714.498 146.346 715 146.932 715L200.342 715C200.935 715 201.398 714.486 201.336 713.895L196.82 670.974L196.82 670.974C196.817 670.95 196.814 670.926 196.81 670.902ZM142.721 669.66L142.721 662.666L142.721 551.281L142.721 544.281L149.721 544.281L196.721 544.281L203.721 544.281L203.721 551.281L203.721 662.666L203.721 669.662L203.721 669.666L203.699 669.666C203.707 669.708 203.714 669.751 203.721 669.794C203.746 669.943 203.766 670.092 203.781 670.242L204.457 676.666L208.298 713.163C208.795 717.886 205.091 722 200.342 722L146.932 722C142.243 722 138.559 717.985 138.962 713.314L142.118 676.666L142.662 670.351C142.676 670.182 142.696 670.013 142.721 669.845C142.731 669.785 142.74 669.725 142.751 669.666L142.721 669.666L142.721 669.66Z" fill="black"/>
            <path d="M143.5 513.603C141.1 495.831 102.833 460.711 84 445.372L261.5 448.545C241.9 463.355 213 498.088 201 513.603L200 670.694L205.5 713.537L202.5 717.769L146.5 718.826L143.5 714.595L147.5 672.81C147.167 627.146 145.9 531.375 143.5 513.603Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_49_29">
            <rect width="726" height="348" fill="white" transform="translate(0 726) rotate(-90)"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <div className='shape-title'>Standard</div>
        </Button>
        <Button className='shape-btn' variant={isActive('Elongated')} onClick={()=>{handleButtonFilter('Elongated')}}>
          <div className='shape-icon'>
            <svg width="30" height="100" viewBox="0 0 348 726" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_47_4)">
            <rect width="726" height="348" transform="translate(0 726) rotate(-90)"/>
            <rect x="3.5" y="467.5" width="464" height="341" rx="93.5" transform="rotate(-90 3.5 467.5)" stroke="black" strokeWidth="7"/>
            <path d="M73 464C83.2222 468.228 119 485.5 142 529" stroke="black" strokeWidth="7"/>
            <path d="M275 464C264.778 468.228 229 485.5 206 529" stroke="black" strokeWidth="7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M196.721 669.528L196.721 565L149.721 565L149.721 668.282L149.721 668.282L149.721 677.348L149.639 677.794C149.634 677.824 149.629 677.854 149.627 677.885L145.98 717.909C145.927 718.495 146.388 719 146.976 719L200.288 719C200.885 719 201.348 718.482 201.282 717.889L196.832 677.909C196.829 677.884 196.825 677.858 196.82 677.833L196.721 677.311L196.721 669.528ZM142.721 676.521L142.721 669.528L142.721 565L142.721 558L149.721 558L196.721 558L203.721 558L203.721 565L203.721 669.528L203.721 676.523L203.721 676.528L203.698 676.528C203.706 676.571 203.714 676.615 203.721 676.658C203.749 676.816 203.771 676.975 203.789 677.135L204.501 683.528L208.239 717.115C208.767 721.854 205.057 726 200.288 726L146.976 726C142.271 726 138.582 721.96 139.009 717.274L142.084 683.528L142.656 677.25C142.672 677.073 142.694 676.897 142.721 676.722C142.732 676.657 142.743 676.592 142.755 676.528L142.721 676.528L142.721 676.521Z" fill="black"/>
            <rect x="3.5" y="467.5" width="464" height="341" rx="93.5" transform="rotate(-90 3.5 467.5)" fill="black" stroke="black" strokeWidth="7"/>
            <path d="M73 464C83.2222 468.228 119 485.5 142 529" stroke="black" strokeWidth="7"/>
            <path d="M275 464C264.778 468.228 229 485.5 206 529" stroke="black" strokeWidth="7"/>
            <rect x="136.5" y="558.5" width="32" height="73" rx="3.5" transform="rotate(-90 136.5 558.5)" fill="black" stroke="black" strokeWidth="7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M196.721 669.528L196.721 565L149.721 565L149.721 668.282L149.721 668.282L149.721 677.348L149.639 677.794C149.634 677.824 149.629 677.854 149.627 677.885L145.98 717.909C145.927 718.495 146.388 719 146.976 719L200.288 719C200.885 719 201.348 718.482 201.282 717.889L196.832 677.909C196.829 677.884 196.825 677.858 196.82 677.833L196.721 677.311L196.721 669.528ZM142.721 676.521L142.721 669.528L142.721 565L142.721 558L149.721 558L196.721 558L203.721 558L203.721 565L203.721 669.528L203.721 676.523L203.721 676.528L203.698 676.528C203.706 676.571 203.714 676.615 203.721 676.658C203.749 676.816 203.771 676.975 203.789 677.135L204.501 683.528L208.239 717.115C208.767 721.854 205.057 726 200.288 726L146.976 726C142.271 726 138.582 721.96 139.009 717.274L142.084 683.528L142.656 677.25C142.672 677.073 142.694 676.897 142.721 676.722C142.732 676.657 142.743 676.592 142.755 676.528L142.721 676.528L142.721 676.521Z" fill="black"/>
            <path d="M143.5 529C141.1 512.2 102.833 479 84 464.5L261.5 467.5C241.9 481.5 213 514.333 201 529L200 677.5L205.5 718L202.5 722L146.5 723L143.5 719L147.5 679.5C147.167 636.333 145.9 545.8 143.5 529Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_47_4">
            <rect width="726" height="348" fill="white" transform="translate(0 726) rotate(-90)"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <div className='shape-title'>Elongated</div>
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default Buttons