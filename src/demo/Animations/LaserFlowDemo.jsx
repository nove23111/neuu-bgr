import { useRef, useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box, Image, Flex, Input, Text } from '@chakra-ui/react';

import Customize from '../../components/common/Preview/Customize';
import PreviewSelect from '../../components/common/Preview/PreviewSelect';
import PreviewSlider from '../../components/common/Preview/PreviewSlider';
import CodeExample from '../../components/code/CodeExample';
import PropTable from '../../components/common/Preview/PropTable';
import Dependencies from '../../components/code/Dependencies';
import RefreshButton from '@/components/common/Preview/RefreshButton';
import useForceRerender from '@/hooks/useForceRerender';

import LaserFlow from '@/content/Animations/LaserFlow/LaserFlow';
import { laserFlow } from '@/constants/code/Animations/laserFlowCode';

const LaserFlowDemo = () => {
  const containerRef = useRef(null);
  const revealImgRef = useRef(null);
  const [key, forceRerender] = useForceRerender();
  const [selectedExample, setSelectedExample] = useState('box');
  const [laserColor, setLaserColor] = useState('#CF9EFF');
  const [horizontalSizing, setHorizontalSizing] = useState(0.5);
  const [verticalSizing, setVerticalSizing] = useState(2.0);
  const [wispDensity, setWispDensity] = useState(1);
  const [wispSpeed, setWispSpeed] = useState(15.0);
  const [wispIntensity, setWispIntensity] = useState(5.0);
  const [flowSpeed, setFlowSpeed] = useState(0.35);
  const [flowStrength, setFlowStrength] = useState(0.25);
  const [fogIntensity, setFogIntensity] = useState(0.45);
  const [fogScale, setFogScale] = useState(0.3);
  const [fogFallSpeed, setFogFallSpeed] = useState(0.6);
  const [decay, setDecay] = useState(1.1);
  const [falloffStart, setFalloffStart] = useState(1.2);

  const exampleOptions = [
    { label: 'Box', value: 'box' },
    { label: 'Basic', value: 'basic' }
  ];

  const propData = [
    {
      name: 'horizontalBeamOffset',
      type: 'number',
      default: '0.1',
      description: 'Horizontal offset of the beam (0–1 of canvas width).'
    },
    {
      name: 'verticalBeamOffset',
      type: 'number',
      default: '0.0',
      description: 'Vertical offset of the beam (0–1 of canvas height).'
    },
    {
      name: 'horizontalSizing',
      type: 'number',
      default: '0.5',
      description: 'Horizontal sizing factor of the beam footprint.'
    },
    {
      name: 'verticalSizing',
      type: 'number',
      default: '2.0',
      description: 'Vertical sizing factor of the beam footprint.'
    },
    { name: 'wispDensity', type: 'number', default: '1', description: 'Density of micro-streak wisps.' },
    { name: 'wispSpeed', type: 'number', default: '15.0', description: 'Speed of wisp motion.' },
    { name: 'wispIntensity', type: 'number', default: '5.0', description: 'Brightness of wisps.' },
    { name: 'flowSpeed', type: 'number', default: '0.35', description: 'Speed of the beam’s flow modulation.' },
    { name: 'flowStrength', type: 'number', default: '0.25', description: 'Strength of the beam’s flow modulation.' },
    { name: 'fogIntensity', type: 'number', default: '0.45', description: 'Overall volumetric fog intensity.' },
    { name: 'fogScale', type: 'number', default: '0.3', description: 'Spatial scale for the fog noise.' },
    { name: 'fogFallSpeed', type: 'number', default: '0.6', description: 'Drift speed for the fog field.' },
    {
      name: 'mouseTiltStrength',
      type: 'number',
      default: '0.01',
      description: 'How much mouse x tilts the fog volume.'
    },
    { name: 'mouseSmoothTime', type: 'number', default: '0.0', description: 'Pointer smoothing time (seconds).' },
    { name: 'decay', type: 'number', default: '1.1', description: 'Beam decay shaping for sampling envelope.' },
    {
      name: 'falloffStart',
      type: 'number',
      default: '1.2',
      description: 'Falloff start radius used in inverse-square blending.'
    },
    {
      name: 'dpr',
      type: 'number',
      default: 'auto',
      description: 'Device pixel ratio override (defaults to window.devicePixelRatio).'
    },
    { name: 'color', type: 'string', default: '#FF79C6', description: 'Beam color (hex).' }
  ];

  return (
    <Box
      position="relative"
      w="100%"
      h="100vh"
      overflow="hidden"
      bg="#0F0D13"
    >
      <LaserFlow
        horizontalBeamOffset={selectedExample === "box" ? 0.1 : 0.0}
        verticalBeamOffset={selectedExample === "box" ? -0.2 : -0.5}
        horizontalSizing={horizontalSizing}
        verticalSizing={verticalSizing}
        wispDensity={wispDensity}
        wispSpeed={wispSpeed}
        wispIntensity={wispIntensity}
        flowSpeed={flowSpeed}
        flowStrength={flowStrength}
        fogIntensity={fogIntensity}
        fogScale={fogScale}
        fogFallSpeed={fogFallSpeed}
        decay={decay}
        falloffStart={falloffStart}
        color={laserColor}
        key={key}
        className={`laser-flow-demo-${selectedExample}`}
      />
    </Box>
  );
};

export default LaserFlowDemo;
